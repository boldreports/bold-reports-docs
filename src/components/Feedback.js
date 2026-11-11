import React, { useState, useEffect } from 'react';
import '../assets/css/feedback.css';

const getPageVoteKey = (pathName = '') => {
	const cleanPath = (pathName || '').replace(/#.*$/, '').replace(/\.html?$/i, '') || '/';
	return `feedbackVoted:${cleanPath}`;
};

const getPageDislikeKey = (pathName = '') => {
	const cleanPath = (pathName || '').replace(/#.*$/, '').replace(/\.html?$/i, '') || '/';
	return `feedbackDisliked:${cleanPath}`;
};

const Feedback = ({ pathName = '' }) => {
	const [showThanks, setShowThanks] = useState(false);
	const [showDialog, setShowDialog] = useState(false);
	const [selected, setSelected] = useState([]);
	const [comments, setComments] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});
	const [email, setEmail] = useState('');
	const [showEmailConsent, setShowEmailConsent] = useState(false);
	const [showError, setShowError] = useState(false);
	const [thanksMessage, setThanksMessage] = useState('');
	const [likeVoted, setLikeVoted] = useState(false);
	const [dislikeVoted, setDislikeVoted] = useState(false);
	const pageVoteKey = getPageVoteKey(pathName);
	const dislikeVoteKey = getPageDislikeKey(pathName);

	const showFeedbackTooltip = (e, message = 'Voted already') => {
		const tip = document.getElementById('feedback-tooltip');
		if (!tip) return;

		tip.textContent = message;
		const clientX = typeof e?.clientX === 'number' ? e.clientX : 0;
		const clientY = typeof e?.clientY === 'number' ? e.clientY : 0;
		const offset = 24;
		tip.style.left = clientX + 'px';
		tip.style.top = clientY + offset + 'px';
		tip.style.transform = 'translateX(-38%)';
		tip.style.opacity = '1';
	};

	const hideFeedbackTooltip = () => {
		const tip = document.getElementById('feedback-tooltip');
		if (tip) tip.style.opacity = '0';
	};

	// Generate or retrieve session ID
	const getSessionId = () => {
		let sessionId = sessionStorage.getItem('feedbackSessionId');
		if (!sessionId) {
			sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
			sessionStorage.setItem('feedbackSessionId', sessionId);
		}
		return sessionId;
	};

	// Check if user has already liked on component mount
	useEffect(() => {
		const votedPages = JSON.parse(sessionStorage.getItem('votedPages') || '{}');
		const isVoted = Boolean(votedPages[pageVoteKey]);
		const isDisliked = sessionStorage.getItem(dislikeVoteKey) === 'true';
		setLikeVoted(isVoted);
		setDislikeVoted(isDisliked);
		setShowThanks(false);
		setShowDialog(false);
		setSelected([]);
		setComments({});
		setFieldErrors({});
		setEmail('');
		setShowEmailConsent(false);
		setShowError(false);
		setThanksMessage('');

		if (typeof document !== 'undefined' && !document.getElementById('feedback-tooltip')) {
			const tip = document.createElement('div');
			tip.id = 'feedback-tooltip';
			tip.className = 'custom-tooltip';
			document.body.appendChild(tip);
		}
	}, [pageVoteKey, dislikeVoteKey]);

	const handleYes = (e) => {
		const votedPages = JSON.parse(sessionStorage.getItem('votedPages') || '{}');

		// Check if this page has already voted
		if (votedPages[pageVoteKey]) {
			if (e) {
				showFeedbackTooltip(e, 'Voted already');
			}
			return;
		}

		// Mark this page as voted
		votedPages[pageVoteKey] = true;
		sessionStorage.setItem('votedPages', JSON.stringify(votedPages));
		setLikeVoted(true);
		setShowThanks(true);
		setShowDialog(false);
	};

	const handleNo = (e) => {
		if (dislikeVoted) {
			if (e) {
				showFeedbackTooltip(e, 'Voted already');
			}
			return;
		}
		setShowDialog(true);
		setShowThanks(false);
	};

	const handleCloseDialog = () => {
		setShowDialog(false);
		setSelected([]);
		setComments({});
		setFieldErrors({});
		setEmail('');
		setShowEmailConsent(false);
		setShowError(false);
	};

	const handleEmailChange = (e) => {
		const v = e.target.value || '';
		setEmail(v);
		setShowEmailConsent(v.trim() !== '');
	};

	const toggleSelected = (key) => {
		setSelected((prev) => {
			const arr = Array.isArray(prev) ? prev : [];
			if (arr.includes(key)) {
				setFieldErrors((prevErrors) => {
					const nextErrors = { ...prevErrors };
					delete nextErrors[key];
					return nextErrors;
				});
				return arr.filter((k) => k !== key);
			}
			return [...arr, key];
		});
	};

	const handleCommentChange = (key) => (e) => {
		const value = e.target.value || '';
		setComments((prev) => ({ ...prev, [key]: value }));
		setFieldErrors((prevErrors) => {
			if (!prevErrors[key]) return prevErrors;
			const nextErrors = { ...prevErrors };
			if (value.trim()) {
				delete nextErrors[key];
			}
			return nextErrors;
		});
	};

	const handleSubmit = () => {
		setShowError(false);
		setFieldErrors({});
		const hasSelected = Array.isArray(selected) && selected.length > 0;
		if (!hasSelected) {
			if (!email.trim()) {
				setShowError(true);
			}
			return;
		}

		if (hasSelected) {
			const nextErrors = {};
			for (const sel of selected) {
				const txt = (comments[sel] || '').trim();
				if (!txt) {
					nextErrors[sel] = 'Please provide feedback or comments for the selected option';
				}
			}
			if (Object.keys(nextErrors).length > 0) {
				setFieldErrors(nextErrors);
				return;
			}
		}

		// Success: show submitted message and reset dialog
		setShowDialog(false);
		setShowThanks(true);
		setThanksMessage('Thank you for your feedback and comments.We will rectify this as soon as possible!');
		setSelected([]);
		setComments({});
		setFieldErrors({});
		setEmail('');
		setShowEmailConsent(false);
		sessionStorage.setItem(dislikeVoteKey, 'true');
		setDislikeVoted(true);
	};

	return (
		<div id="feedback-container" className={showThanks ? 'show-thanks' : ''}>
			{!showThanks && !showDialog && (
				<div id="footer-feedback">
					<div className="feedback-ques">
						<div className="feedback-ques-text">Was this page helpful?</div>
						<div className="feedback-options">
							<div
								id="feedback-up"
								className={`feedback feedback-clickable ${likeVoted ? 'feedback-voted' : ''}`}
								onClick={handleYes}
								onMouseMove={(e) => {
									if (likeVoted) {
										showFeedbackTooltip(e, 'Voted already');
									}
								}}
								onMouseLeave={hideFeedbackTooltip}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										handleYes(e);
									}
								}}
							>
								<div className="feedback-up-icon bd-icon bd-icon-like"></div>
								<div className="feedback-up-text">Like</div>
							</div>
							<div
								id="feedback-down"
								className={`feedback feedback-clickable ${dislikeVoted ? 'feedback-voted' : ''}`}
								onClick={handleNo}
								onMouseMove={(e) => {
									if (dislikeVoted) {
										showFeedbackTooltip(e, 'Voted already');
									}
								}}
								onMouseLeave={hideFeedbackTooltip}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										handleNo(e);
									}
								}}
							>
								<div className="feedback-down-icon bd-icon bd-icon-dislike"></div>
								<div className="feedback-down-text">Dislike</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{showThanks && (
				<div id="thanks-container" className="thanks-bg">
					<div className="thanks-message satisfy-fonts flex-horizontal">
						<span className="feedback-successmsg font-20 bd-icon bd-icon-ok"></span>
						<div className="feedback-successmsg" style={{ overflowWrap: 'anywhere' }}>
							{thanksMessage || 'Thank you for your feedback!'}
						</div>
					</div>
				</div>
			)}

			{showDialog && (
				<div
					id="feedBackDlg"
					className="e-control e-dialog e-lib e-dlg-modal e-popup e-popup-open"
					role="dialog"
					aria-labelledby="feedBackDlg_title"
					aria-describedby="feedBackDlg_dialog-content"
					aria-modal="true"
					tabIndex={-1}
				>
					<div className="e-dlg-header" id="feedBackDlg_title">
						Help us improve this page
					</div>

					<div className="e-dlg-content" id="feedBackDlg_dialog-content">
						<div className="feedback-down-response">
							<div id="checkboxes" className="multiselect">
								<div className="e-checkbox-wrapper e-wrapper" role="checkbox" aria-checked={selected.includes('one')}>
									<label htmlFor="one">
										<input
											id="one"
											className="e-control e-checkbox e-lib"
											type="checkbox"
											onChange={() => toggleSelected('one')}
											checked={selected.includes('one')}
											aria-labelledby="label-one"
										/>
										<span className="e-icons e-frame" aria-hidden="true"></span>
										<span id="label-one" className="e-label">
											Correct inaccurate or outdated content
										</span>
									</label>
								</div>
								<textarea
									id="commentone"
									aria-label="Comment: Correct inaccurate or outdated content"
									className={`form-control message ${selected.includes('one') ? '' : 'doc-hide'}`}
									value={comments.one || ''}
									onChange={handleCommentChange('one')}
									rows={3}
									placeholder="Please specify what content needs correction..."
								></textarea>
								<div className={`error-message ${fieldErrors.one ? '' : 'doc-hide'}`}>{fieldErrors.one}</div>
								<br />

								<div className="e-checkbox-wrapper e-wrapper" role="checkbox" aria-checked={selected.includes('two')}>
									<label htmlFor="two">
										<input
											id="two"
											className="e-control e-checkbox e-lib"
											type="checkbox"
											onChange={() => toggleSelected('two')}
											checked={selected.includes('two')}
											aria-labelledby="label-two"
										/>
										<span className="e-icons e-frame" aria-hidden="true"></span>
										<span id="label-two" className="e-label">
											Improve illustrations or images
										</span>
									</label>
								</div>
								<textarea
									id="commenttwo"
									aria-label="Comment: Improve illustrations or images"
									className={`form-control message ${selected.includes('two') ? '' : 'doc-hide'}`}
									value={comments.two || ''}
									onChange={handleCommentChange('two')}
									rows={3}
									placeholder="Please specify which images can be improved..."
								></textarea>
								<div className={`error-message ${fieldErrors.two ? '' : 'doc-hide'}`}>{fieldErrors.two}</div>
								<br />

								<div className="e-checkbox-wrapper e-wrapper" role="checkbox" aria-checked={selected.includes('three')}>
									<label htmlFor="three">
										<input
											id="three"
											className="e-control e-checkbox e-lib"
											type="checkbox"
											onChange={() => toggleSelected('three')}
											checked={selected.includes('three')}
											aria-labelledby="label-three"
										/>
										<span className="e-icons e-frame" aria-hidden="true"></span>
										<span id="label-three" className="e-label">
											Fix typos or broken links
										</span>
									</label>
								</div>
								<textarea
									id="commentthree"
									aria-label="Comment: Fix typos or broken links"
									className={`form-control message ${selected.includes('three') ? '' : 'doc-hide'}`}
									value={comments.three || ''}
									onChange={handleCommentChange('three')}
									rows={3}
									placeholder="Please specify what needs to be fixed..."
								></textarea>
								<div className={`error-message ${fieldErrors.three ? '' : 'doc-hide'}`}>{fieldErrors.three}</div>
								<br />

								<div className="e-checkbox-wrapper e-wrapper" role="checkbox" aria-checked={selected.includes('four')}>
									<label htmlFor="four">
										<input
											id="four"
											className="e-control e-checkbox e-lib"
											type="checkbox"
											onChange={() => toggleSelected('four')}
											checked={selected.includes('four')}
											aria-labelledby="label-four"
										/>
										<span className="e-icons e-frame" aria-hidden="true"></span>
										<span id="label-four" className="e-label">
											Add more information
										</span>
									</label>
								</div>
								<textarea
									id="commentfour"
									aria-label="Comment: Add more information"
									className={`form-control message ${selected.includes('four') ? '' : 'doc-hide'}`}
									value={comments.four || ''}
									onChange={handleCommentChange('four')}
									rows={3}
									placeholder="Please specify what information should be added..."
								></textarea>
								<div className={`error-message ${fieldErrors.four ? '' : 'doc-hide'}`}>{fieldErrors.four}</div>
								<br />

								<div className="e-checkbox-wrapper e-wrapper" role="checkbox" aria-checked={selected.includes('five')}>
									<label htmlFor="five">
										<input
											id="five"
											className="e-control e-checkbox e-lib"
											type="checkbox"
											onChange={() => toggleSelected('five')}
											checked={selected.includes('five')}
											aria-labelledby="label-five"
										/>
										<span className="e-icons e-frame" aria-hidden="true"></span>
										<span id="label-five" className="e-label">
											Correct inaccurate or outdated code samples
										</span>
									</label>
								</div>
								<textarea
									id="commentfive"
									aria-label="Comment: Correct inaccurate or outdated code samples"
									className={`form-control message ${selected.includes('five') ? '' : 'doc-hide'}`}
									value={comments.five || ''}
									onChange={handleCommentChange('five')}
									rows={3}
									placeholder="Please specify what needs correction..."
								></textarea>
								<div className={`error-message ${fieldErrors.five ? '' : 'doc-hide'}`}>{fieldErrors.five}</div>
								<br />

								<div className="e-checkbox-wrapper e-wrapper" role="checkbox" aria-checked={selected.includes('six')}>
									<label htmlFor="six">
										<input
											id="six"
											className="e-control e-checkbox e-lib"
											type="checkbox"
											onChange={() => toggleSelected('six')}
											checked={selected.includes('six')}
											aria-labelledby="label-six"
										/>
										<span className="e-icons e-frame" aria-hidden="true"></span>
										<span id="label-six" className="e-label">
											Other
										</span>
									</label>
								</div>
								<textarea
									id="commentsix"
									aria-label="Comment: Other feedback"
									className={`form-control message ${selected.includes('six') ? '' : 'doc-hide'}`}
									value={comments.six || ''}
									onChange={handleCommentChange('six')}
									rows={3}
									placeholder="Please enter feedback on topics not previously listed..."
								></textarea>
								<div className={`error-message ${fieldErrors.six ? '' : 'doc-hide'}`}>{fieldErrors.six}</div>
								<div className={`error-message ${showError ? '' : 'doc-hide'}`} style={{ display: 'block', marginTop: '18px' }}>Please select at least one option before submitting.</div>
								<br />
							</div>

							<input aria-label="Email (optional)" className="e-input email-input" type="email" placeholder="Email (optional)" value={email} onChange={handleEmailChange} />
							<div className={`e-checkbox-wrapper e-wrapper ${showEmailConsent ? '' : 'doc-hide'}`} role="checkbox" aria-checked="false">
								<label htmlFor="emailcheckbox" className="email-checkbox">
									<input id="emailcheckbox" aria-labelledby="label-emailcheckbox" className="e-control e-checkbox e-lib" type="checkbox" />
									<span className="e-icons e-frame" aria-hidden="true"></span>
									<span id="label-emailcheckbox" className="e-label">
										I agree to the creation of a Syncfusion account in my name and to be contacted regarding this message. No further action will be taken. Please see our{' '}
										<a href="https://www.syncfusion.com/privacy" target="_blank">
											{' '}
											Privacy policy.
										</a>
									</span>
								</label>
							</div>
							<div id="email-error-message" className="error-message doc-hide"></div>
						</div>

						<div className="feedback-up-response doc-hide">Thank you for your feedback and comments.We will rectify this as soon as possible!</div>
					</div>

					<div className="e-footer-content">
						<button type="button" className="e-control e-btn e-lib e-primary feed-submit e-flat" onClick={handleSubmit}>
							Submit
						</button>
						<button type="button" className="e-control e-btn e-lib e-primary feed-cancel e-flat" onClick={handleCloseDialog}>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Feedback;
