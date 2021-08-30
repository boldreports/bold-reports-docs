---
layout: post
title: Steps for deploy the Bold Report in Kubernetes cluster.
description: This topic describes how to deploy the Bold Reports Enterprise Edition in the Kubernetes cluster.The following document is to describe the steps for creating the pods and cluster in kubernetes.
platform: report-platform
documentation: ug
---

# Bold Reports on On-Premise Kubernetes Cluster

1. Download the following files for Bold Reports deployment in On-Premise.
    * `pvclaim_onpremise.yaml`
    * `deployment.yaml`
    * `hpa.yaml`
    * `service.yaml`
    * `ingress.yaml`
    * `namespace.yaml`
2. Create a folder in your machine to store the shared folders for applications usage.

    ```console
    Ex: D://app/shared
    ```
3. Open `pvclaim_onpremise.yaml` file, downloaded in Step 1 .Replace the shared folder path in your host machine to the `<local_directory>` place in the file. You can also change the storage size in the YAML file.
    ```console
    Ex: D://app/shared -> /run/desktop/mnt/host/d/app/shared
    ```
    ![Pvclaim_onpremise File Changes](/static/assets/on-premise/images/installation/pvclaim_onpremise.png)
4. Deploy the latest Nginx ingress controller to your cluster using the following command.
    ```console
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/cloud/deploy.yaml
    ```
5. Map the DNS to your machine IP address, in which you want to access the application.
6. Navigate to the folder where the deployment files were downloaded from Step 1.
7. Run the following command to create the namespace for deploying Bold Reports.
    ```console
    kubectl apply -f namespace.yaml
    ```
8. Open the ingress.yaml file. Uncomment the host value and replace your DNS hostname with example.com and save the file.
9. If you have the SSL certificate for your DNS and need to configure the site with your SSL certificate, run the following command to create a TLS secret with your SSL certificate.
    ```console
   kubectl create secret tls boldreports-tls -n bold-services --key <key-path> --cert <certificate-path>
    ```
10. Now, uncomment the tls section and replace your DNS hostname with example.com in ingress spec and save the file.
    ![Ingress File Changes](/static/assets/on-premise/images/installation/ingress_yaml.png)
11. Open the deployment.yaml file from the downloaded files in Step 1. Replace your DNS in `<application_base_url>` place.
    ```console
    Ex: http://example.com, https://example.com
    ```
    ![Deployment File Changes](/static/assets/on-premise/images/installation/deployment_yaml.png)
12. Now, run the following commands one by one:
    ```console
    kubectl apply -f pvclaim_onpremise.yaml
    ```
    ```console
    kubectl apply -f deployment.yaml
    ```
    ```console
    kubectl apply -f hpa.yaml
    ```
    ```console
    kubectl apply -f service.yaml
    ```
    ```console
    kubectl apply -f ingress.yaml
    ```
13. Wait for some time till the Bold Reports On-Premise application deployed to your On-Premise Kubernetes cluster.
14. Use the following command to get the pods status.
     ```console
    kubectl get pods -n bold-services
    ```
    ![Pods Status](/static/assets/on-premise/images/installation/pods_running_status.png)
15. Use your DNS hostname to access the application in the browser.
16. Configure the Bold Reports On-Premise application startup to use the application. Please refer the following link for more details on configuring the application startup.
* [Application Startup](../../../application-startup/)