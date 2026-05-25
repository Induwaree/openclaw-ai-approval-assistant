# OpenClaw AI Approval Assistant

An AI-powered workflow approval assistant built for the OpenClaw Challenge.

---

## Problem

Many organisations still manage approvals manually through emails, spreadsheets, and separate documents. This causes delays, missed approvals, and poor visibility.

---

## Solution

This project uses OpenClaw to support document approval workflows by summarising requests, categorising them, assigning priority, and tracking approval status.

---

## Features

- Approval dashboard
- Request tracking
- AI-generated request summary
- AI category detection
- AI priority assignment
- Approve / Reject workflow
- Upload request form
- Modern UI dashboard

---

## OpenClaw Workflow

When a new request is submitted:

1. OpenClaw reads the request content
2. Generates a short AI summary
3. Detects the request category
4. Assigns request priority
5. Creates an approval task
6. Sends notification to approver
7. Tracks final approval status

---

## Example Use Cases

- Banking approval requests
- Credit card limit enhancement approvals
- HR leave approvals
- Vendor payment approvals
- Procurement workflows

---

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- OpenClaw Workflow Concept
- GitHub

---

## Why I Built This

I built this project based on my experience in workflow automation, banking operations, and approval process optimisation.

The goal was to create a simple AI-powered system that improves operational efficiency and reduces manual workflow handling.

---

## Future Improvements

- Real AI integration
- Email notifications
- Authentication system
- Database integration
- OCR document analysis
- Workflow analytics

---

## Author

Induwaree Amodya De Silva

## OpenClaw Integration

OpenClaw is used as the AI workflow layer for this project.

The dashboard sends approval request data to the workflow assistant. OpenClaw can then analyse the request, generate a summary, assign a category, set priority, and notify the approver.

For the MVP, the app includes a local API route that simulates the OpenClaw response. This can be replaced with a real OpenClaw Gateway webhook in the next version.