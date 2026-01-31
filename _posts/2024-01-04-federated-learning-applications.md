---
layout: post
title: "Federated Learning and Its Applications"
date: 2024-01-04
description: Federated learning is a growing field in AI, with clear benefits for privacy and performance.
tags: [research, federated-learning, computer-vision]
categories: articles
---

## Key takeaways
This project was an immersive exploration of deep learning, computer vision, federated learning, and machine
learning. I implemented and evaluated a federated learning pipeline using a U-Net model for wheat head instance
segmentation. I trained models on ARC remote servers, worked on image processing and transformation techniques,
and ran a literature review that sharpened my research toolkit.

## Paper
Download the draft manuscript: [FL draft manuscript](/assets/pdf/fl-draft-manuscript.pdf)

## Abstract
In my final year thesis project at the University of Calgary, we tackled the challenges associated with
centralized learning in wheat head instance segmentation, specifically addressing privacy concerns and
computational limitations. The goal was to improve accuracy and efficiency in this agricultural task by
leveraging federated learning, an approach that improves data privacy and avoids centralized bottlenecks.

{% include figure.liquid path="/assets/img/articles/fl-representation.png" title="Federated learning representation diagram." max-width="640px" %}

## Federated learning solution
Federated learning emerged as a solution to these challenges, and our project focused on implementing and
evaluating a federated learning pipeline for wheat head instance segmentation. The pipeline was model-agnostic
and used a modified U-Net to compare approaches across clients.

{% include figure.liquid path="/assets/img/articles/unet-architecture.png" title="Modified U-Net architecture." max-width="640px" %}

## Comparison of approaches
We compared two approaches - FedAvg and FedProx - and evaluated using Intersection over Union and Dice scores,
against a centralized baseline. Wheat head images from 18 institutions were sourced from the Global Wheat Head
Dataset. FedAvg achieved a Dice score of 0.9355 on the test set, outperforming the centralized baseline.

{% include figure.liquid path="/assets/img/articles/segmented-examples.png" title="Example segmentations from the wheat head dataset." max-width="640px" %}

## Conclusion
This project shows the potential of federated learning to address privacy and scalability challenges in
agricultural computer vision. It is a practical path forward for applying ML where data access is constrained.

Person at work ... check back later.

{% include figure.liquid path="/assets/img/articles/freetze.jpg" title="Person at work." max-width="320px" %}
