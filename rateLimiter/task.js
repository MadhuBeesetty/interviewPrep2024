// # Contractor Email Invitation Processor

// ## Context
// You're building a feature for a construction project management system. When a general contractor starts a new project, they need to invite subcontractors (electricians, plumbers, etc.) to join the platform. These invitations need to be validated and rate-limited to prevent spam and ensure proper usage.
//  1) validation.
//  2) rate limitter.

// ## Task
// Build a TypeScript class that processes and validates contractor email invitations.

// // in one hour we a random limit:
// // i can have a store system which tracks ever hour calls,
// // keep track on previous hour,
// global variable of most previous hour which tracks all events,

// whenever i make a new APi call, i can do Date.now and compare.

// ### Example Usage
// ```typescript
// const processor = new ContractorInviteProcessor({
//   maxInvitesPerHour: 5,
//   maxBatchSize: 3
// });

// // General contractor inviting subcontractors
// const results = await processor.processInvites('project-123', [
//   'electrical@construction.com',
//   'plumbing@builders.net'
// ]);
// ```
// // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// ## Requirements

// ### Core Functionality
// - Process batches of email invitations
// - Validate email format
// - Validate allowed domains
// - Track invitation counts within time windows for the given project (rate limiting)
// - Handle edge cases and errors
// - Note: `ContractorInviteProcessor.processInvites` does not actually send any email, it only validates and rate limits
// - No persistence is required. Keeping data in memory is sufficient.

// ### Constraints
// - **Rate limit**: Maximum 5 invites per hour per project
// - **Batch size**: Maximum 3 emails per request
// - **Allowed domains**: `construction.com`, `builders.net`, `contractors.org`

// ### Rate Limit Behavior
// - If a project exceeds 5 invites within a rolling 1-hour window:
//   - The entire batch is rejected
//   - An error is thrown with the message: `"Rate limit exceeded for this project"`
//   - No emails from that batch are processed or counted
//   - Counter resets 1 hour after each successful invite

// ## Expected Deliverables
// - Implementation of `ContractorInviteProcessor` class with required methods
// - Unit tests covering core functionality
// - Error handling for invalid inputs and rate limit violations
