import React, { useEffect, useState, useCallback } from 'react';
import Header from '../components/Header';
import HeadTag from '../components/HeadTag';
import TopNav from '../components/TopNav';
import LeftToc from '../components/LeftToc';
import MobileLeftToc from '../components/MobileLeftToc';
import Footer from '../components/Footer';
import RightToc from '../components/RightToc';
import NavigationButtons from '../components/NavigationButtons';
import MdContents from '../components/MdContents';
import Feedback from '../components/Feedback';
import Breadcrumb from '../components/BreadCrumb';
import '../assets/css/style.css';
import '../assets/css/prism.css';
import toc from '../../left-toc.json';

const tabData = toc.tabData || [];
const leftTocData = toc.leftTocData || [];
const breadCrumbData = toc.routerData || [];
const navigationData = toc.routerData || [];
const pathPrefix = toc?.pathPrefix || '';

const normalizePath = (value = '') => {
    if (!value) return '/';
    const pathname = String(value).split(/[?#]/)[0].trim();
    if (!pathname || pathname === '/') return '/';
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

const tabContainsPath = (items = [], currentPath = '') => {
    const targetPath = normalizePath(currentPath);

    const walk = (nodes) => {
        for (const node of nodes || []) {
            if (normalizePath(node?.path) === targetPath) {
                return true;
            }

            if (node?.items?.length && walk(node.items)) {
                return true;
            }
        }

        return false;
    };

    return walk(items);
};

const findActiveTab = (currentPath = '') => {
    const tabs = Object.entries(leftTocData || {});

    for (const [tabName, tabData] of tabs) {
        if (tabContainsPath(tabData?.items || [], currentPath)) {
            return tabName;
        }
    }

    return tabData[0] || '';
};

const stripPathPrefix = (pathname = '') => {
    const prefix = pathPrefix;
    if (prefix && pathname.startsWith(prefix)) {
        return pathname.slice(prefix.length);
    }
    return pathname;
};

const Layout = ({ pageContext = {} }) => {
    const { slug = '' } = pageContext;

    // State for content - allows client-side updates without page reload
    const [resolvedPageContext, setResolvedPageContext] = useState(pageContext);
    const [isLoading] = useState(false);
    const { html = '', lastUpdated } = resolvedPageContext;

    const getInitialPath = useCallback(() => {
        if (typeof window !== 'undefined' && window.location?.pathname) {
            // Strip pathPrefix to match slug and routerData keys
            return stripPathPrefix(window.location.pathname) || slug || '/';
        }

        return slug || '/';
    }, [slug]);

    const [currentPath, setCurrentPath] = useState(getInitialPath);
    const [activeTab, setActiveTab] = useState(findActiveTab(getInitialPath()));
    const [mobileTocOpen, setMobileTocOpen] = useState(false);
    const [tocSearchResetKey, setTocSearchResetKey] = useState(0);

    const scrollContentToTop = () => {
        if (typeof window === 'undefined') return;
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        const content = document.getElementById('content-container');
        if (content) content.scrollTop = 0;
    };

    // Fetch content via GraphQL
    const fetchPageContent = async (path) => {
        try {
            const pagePath = path === "/" ? "/index/" : path;
            const response = await fetch(`${pathPrefix}/page-data${pagePath}page-data.json`);
            const data = await response.json();
            const nextPageContext = data?.result?.pageContext || {};

            setResolvedPageContext(nextPageContext);
        } catch (error) {
            console.error('Failed to fetch page content:', error);
        }
    };

    // Navigation handler for client-side updates
    const handleNavigate = (path) => {
        if (!path) return;

        const newPath = pathPrefix ? `${pathPrefix}${path}` : path;

        window.history.pushState({}, '', newPath);
    };

    useEffect(() => {
        setResolvedPageContext(pageContext);
    }, [pageContext]);

    useEffect(() => {
        setActiveTab(findActiveTab(currentPath));
        setMobileTocOpen(false);
    }, [currentPath]);

    useEffect(() => {
        setCurrentPath(getInitialPath());
    }, [slug, getInitialPath]);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const originalPushState = window.history.pushState;
        const originalReplaceState = window.history.replaceState;

        const handleLocationChange = async () => {
            const path = stripPathPrefix(window.location.pathname);

            setCurrentPath(path);
            setActiveTab(findActiveTab(path));

            scrollContentToTop();

            await fetchPageContent(path);
        };

        // Override pushState
        window.history.pushState = function (...args) {
            originalPushState.apply(window.history, args);

            window.dispatchEvent(new Event('locationchange'));
        };

        // Override replaceState
        window.history.replaceState = function (...args) {
            originalReplaceState.apply(window.history, args);

            window.dispatchEvent(new Event('locationchange'));
        };

        // Browser back/forward
        window.addEventListener('popstate', handleLocationChange);

        // Custom pushState/replaceState
        window.addEventListener('locationchange', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            window.removeEventListener('locationchange', handleLocationChange);

            // Restore originals
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
        };
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setTocSearchResetKey((prev) => prev + 1);
    };

    const closeMobileToc = () => setMobileTocOpen(false);

    return (
        <>
            {/* Head Tag */}
            <HeadTag pageContext={resolvedPageContext} />

            {/* Header */}
            <Header />

            {/* TOP NAV */}
            <TopNav tabs={tabData} activeTab={activeTab} onTabChange={handleTabChange} />
            <MobileLeftToc
                open={mobileTocOpen}
                tabs={tabData}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                leftTocData={leftTocData}
                currentPath={currentPath}
                onClose={closeMobileToc}
                pathPrefix={pathPrefix}
            />

            <div id="layout-container">
                <div id="left-side">
                    <LeftToc
                        leftToc={leftTocData}
                        activeTab={activeTab}
                        currentPath={currentPath}
                        pathPrefix={pathPrefix}
                        onNavigate={handleNavigate}
                        searchResetKey={tocSearchResetKey}
                    />
                </div>
                <div id="right-side">
                    <main>
                        <Breadcrumb
                            breadCrumb={breadCrumbData}
                            currentPath={currentPath}
                            onToggleMobileToc={() => setMobileTocOpen((prev) => !prev)}
                            pathPrefix={pathPrefix}
                        />
                        <div id="content-container" style={{ position: 'relative' }}>
                            <MdContents html={html} lastUpdated={lastUpdated} />

                            {isLoading && (
                                <div className="content-loading content-loading-overlay" aria-live="polite" aria-busy="true">
                                    <span className="bd-icon bd-icon-loading" aria-hidden="true" />
                                </div>
                            )}

                            <Feedback pathName={currentPath} />
                            <NavigationButtons navigation={navigationData} currentPath={currentPath} pathPrefix={pathPrefix} />
                        </div>
                    </main>
                    <RightToc html={html} enableBehavior />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;