---
layout: post
title: Scale Report Server on Azure and Kubernetes | Bold Reports
description: Learn how Bold Reports Report Server scales with Azure App Service plans and Kubernetes horizontal pod autoscaling, including the HPA metrics to set in YAML.
platform: report-platform
documentation: ug
---

# Does Bold Reports<sup>®</sup> support scaling?

Yes. Bold Reports<sup>®</sup> supports scaling on Azure App Service and on Kubernetes.

## Azure App Service scaling

Yes, Bold Reports<sup>®</sup> supports Azure App Service scaling. Bold Reports<sup>®</sup> On-Premises Edition lets you create a Bold Reports<sup>®</sup> Report Server with Azure App Service using an ARM template. You can then scale up your Report Server application on demand by deploying it as an [Azure App Service](./../../../deployment/azure-app-service/).

To get better performance, scale up the App Service plan from basic to standard or premium plans. The following Microsoft documentation links explain how to scale up and scale out the App Service plan:

Scale up: <https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-scale>

Scale out: <https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/insights-how-to-scale>

## Kubernetes scaling

Yes, Bold Reports<sup>®</sup> supports scaling on [Kubernetes](./../../../deployment/deploy-on-kubernetes/). By default, Kubernetes can monitor your pods and scale them up automatically as soon as it detects an increase in CPU usage or other metrics.

### How do I specify the metrics in the YAML file for scalability?

To scale Bold Reports<sup>®</sup> on Kubernetes, specify resource requests like `cpu`, `memory`, and `averageUtilization` in the pod specification. The HPA controller uses them to determine resource utilization and scale the target up or down.
Specify the metrics in the HPA and deployment files as follows:

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

For more details about scaling, see the [Kubernetes Horizontal Pod Autoscaling documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/).

## Frequently asked questions

### Which Azure App Service plans give better Bold Reports<sup>®</sup> performance?

Scale up the App Service plan from basic to standard or premium plans to get better performance.

### When does Kubernetes scale Bold Reports<sup>®</sup> pods?

Kubernetes scales the pods up automatically when it detects an increase in CPU usage or other metrics that you set in the HPA file.

## See also

* [Bold Reports<sup>®</sup> architecture](./../bold-reports-architecture/)
* [Where can I find the log files in Kubernetes?](./../where-can-i-find-the-error-and-debug-log-files-of-bold-reports-in-kubernetes/)
* [How to restart the Bold Reports<sup>®</sup> application](./../how-to-restart-the-bold-reports-enterprise-application/)
