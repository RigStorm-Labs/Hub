# FORMSPREE INTEGRATION

Use **Formspree** as the submission service for the General Enquiry form.

### Endpoint

`https://formspree.io/f/mrpzkqlz`

Submit the form directly to this endpoint.

Do not create a custom backend for V1.

---

## FORM SUBMISSION

Use a standard Formspree-compatible POST submission.

Ensure every important field has a meaningful `name` attribute so the received enquiry is understandable.

Recommended field names:

* `name`
* `email`
* `phone`
* `company`
* `enquiry_type`
* `message`

The selected company and enquiry type must be included in the Formspree submission.

---

## VALIDATION BEFORE SUBMISSION

The frontend must validate:

1. Name is provided.
2. Message is provided.
3. **At least one of `email` or `phone` is provided.**
4. If email is provided, validate its basic format.
5. If phone is provided, accept legitimate international formats.

Do NOT require both email and phone.

Valid:

```text
Email only       ✓
Phone only       ✓
Email + Phone    ✓
Neither          ✗
```

---

## SUBMISSION UX

When the visitor submits:

### While submitting

Show a subtle loading state:

**Sending enquiry…**

Prevent duplicate submissions while the request is in progress.

### Successful submission

Show:

**Enquiry Received**

**Thanks for reaching out to RigStorm. We've received your enquiry and will get back to you using the contact details provided.**

### Failed submission

Show a clear error:

**We couldn't send your enquiry right now. Please try again.**

Keep the user's entered information intact so they don't have to retype everything.

---

## IMPORTANT

Do not expose, display, or describe the Formspree endpoint to normal visitors.

The endpoint is an implementation detail.

Keep the existing RigStorm Hub visual design completely unchanged apart from adding the General Enquiry functionality.
