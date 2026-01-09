# Diary – Static Frontend Application

## Overview
This repository contains the **static frontend application** for the Personal Diary project.  
The frontend is deployed using **Amazon S3** and distributed globally using **Amazon CloudFront**.

Public Access URL:
https://front.diary.work.gd

---

## Architecture

![Frontend Architecture](architecture/frontend-architecture.png)

### Architecture Summary
- Static frontend hosted in **Amazon S3**
- Content delivered through **Amazon CloudFront (CDN)**
- S3 bucket access restricted using **Origin Access Control (OAC)**
- HTTPS enforced via CloudFront
- Backend APIs are accessed through an Application Load Balancer

---

## Setup Steps

### Prerequisites
- AWS Account
- AWS CLI configured
- Static frontend build artifacts (HTML/CSS/JS)

### Deployment Steps
1. Build the frontend application:

npm install
npm run build


2. Upload build artifacts to S3:

aws s3 sync build/ s3://diary-frontend-static


3. Configure CloudFront:
- Origin: S3 bucket
- Enable Origin Access Control (OAC)
- Viewer protocol policy: Redirect HTTP → HTTPS
- Allowed HTTP methods: GET, HEAD
- Default root object: index.html

4. Access the application via:

https://front.diary.work.gd


---

## Assumptions
- Frontend is fully static (no server-side rendering)
- Backend APIs are already deployed and accessible
- CloudFront is used for global performance and HTTPS
- Cost optimization prioritized using S3 + CDN

---

## Testing Steps

1. Open the frontend URL:

https://front.diary.work.gd


2. Verify:
- Application loads successfully
- HTTPS is enforced
- Static assets load from CloudFront
- Browser DevTools show CloudFront headers

---

## Cost Considerations

Key cost components:
- **Amazon S3**: Storage for static files (very low cost)
- **Amazon CloudFront**: Data transfer and requests
- **No EC2 or compute costs** for frontend hosting

This setup is highly cost-effective and suitable for production static websites.

---

## Documentation & Proof

### CloudFront Frontend Access
![CloudFront Access](screenshots/cloudfront-frontend-access.png)

### CloudFront Dynamic Reply
![CloudFront Dynamic Reply From Backend](screenshots/dynamicreply.png)

## Security Highlights
- No public access to S3 bucket
- CloudFront OAC enforced
- HTTPS-only access
- Frontend contains no secrets

---

## Conclusion
This repository demonstrates a **secure, scalable, and cost-efficient static frontend deployment** using AWS best practices.
