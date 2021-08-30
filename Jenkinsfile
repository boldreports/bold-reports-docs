node('EssentialStudio')
{
 timestamps {
     timeout(time: 7200000, unit: 'MILLISECONDS') {
        string status="";
        try {        
            stage 'Import'
                println("Reports Platform Document Validation");
			    git url: 'https://gitlab.syncfusion.com/bold-reports/shared-groovy.git', branch: 'master', credentialsId: env.JENKINS_CREDENTIAL_ID
			    shared = load 'src/shared.groovy'
			    shared.setEnvCurlPath();                

            stage 'Checkout' 
                try {
                    gitlabCommitStatus('Checkout') {
                        checkout scm
                    }
                }
                catch(Exception e) {
                    status='Checkout-Failed'
					currentBuild.result = 'FAILURE'
                }
            if(shared.checkCommitMessage()) {
		    	if(currentBuild.result != 'FAILURE') {
                    stage 'Install'
                        try {	
					    	shared.validateMRDescription();
						    gitlabCommitStatus('Install') {
							    bat 'pipeline';                                
							    shared.install();
						    }
					    }
					    catch(Exception e) {
                            gitlabCommitStatus('failed') {
    						    status='Install-Failed'
						        currentBuild.result = 'FAILURE'
                            }
					    }                    
                }
                if(currentBuild.result != 'FAILURE') {
                    stage 'Test'
                        try {
                            gitlabCommitStatus('Test') {
                               shared.test();
                               println("Test");
                            }
                        }
                        catch(Exception e) {
                            gitlabCommitStatus('failed') {
                                status = 'Test-Failed'
                                currentBuild.result = 'FAILURE'
                            }
                        }
                }
                if(currentBuild.result != 'FAILURE') {
                    stage 'Build'
                        try {
                            shared.build();
                            println("Finished 'Build'");
                        }
                        catch(Exception e) {
                            gitlabCommitStatus('failed') {
                                status = 'Build-Failed'
                                currentBuild.result = 'FAILURE'
                            }
                        }
                }
                if(currentBuild.result != 'FAILURE' && env.publishBranch.contains(gitlabSourceBranch)) {
                    stage 'Publish'
                        try {
                            gitlabCommitStatus('Publish') {
                                shared.publish();
                            }
                        }
                        catch(Exception e) {
                            status = 'Publish-Failed'
                            currentBuild.result = 'FAILURE'
                        }
                }
                stage 'Delete WorkSpace' 
					// Archiving artifacts when the folder was not empty
					gitlabCommitStatus("Archiving artifacts") {
					    def files = findFiles(glob: '**/cireports/**/*.*')
					    if(files.size() > 0) { 		
						    archiveArtifacts artifacts: 'cireports/', excludes: null 		
					    }
					}
                deleteDir()                            
            }
        }
        catch(Exception e) {
            println(e)
		    gitlabCommitStatus('failed') {
    			deleteDir()
			    error('Build Failed')
		    }
        }
     }
  }
}