---
layout: post
title: Scaling options for Azure App Service and Kubernetes
description: This documentation explains about the Azure app service scaling and Kubernetes scaling in Bold Reports.
platform: report-platform
documentation: ug
---

# Does Bold Reports support scaling

## Azure App Service scaling

Yes, Bold Reports supports Azure App Service scaling. Bold Reports Enterprise Edition offers the ability to create a Report Server with Azure App Service using an ARM template. This will help you easily scale up your Report Server application on demand by deploying it as an [Azure App Service](./../../installation/azure-app-service/).

To get better performance, scale up the App Service plan from basic to standard or premium plans. Refer to the following documentation links to learn how to scale up and scale out the App Service plan.

Scale up: <https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-scale>

Scale out: <https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/insights-how-to-scale>

## Kubernetes scaling

Yes, Bold Reports supports scaling on [Kubernetes](./../../installation/deploy-in-kubernetes/). Whereas by default the kubernetes can monitor your pods and scale them up automatically as soon as it detects an increase in the CPU usage or some other metrics.

**How to specify the metrics in YAML file for scalability?**

When defining the pod specification, you should specify the resource requests like `cpu`, `memory`, and `averageUtilization`. This is used to determine the resource utilization by the HPA controller to scale the target up or down.
Please specify the metrics in HPA and deployment file as like below.

[HPA File](https://github.com/boldreports/bold-reports-kubernetes/blob/master/deploy/hpa_gke.yaml)

```yaml
  minReplicas: 1
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

[Deployment File](https://github.com/boldreports/bold-reports-kubernetes/blob/master/deploy/deployment.yaml)

```yaml
 resources:
    requests:
        cpu: 250m
        memory: 750Mi
```

> You can change the resource request specification as per your requirements.

Please refer this [link](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) for further details about scaling.