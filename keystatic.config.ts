import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    // Local while developing; switch to { kind: 'github', repo: 'you/writenow-media' }
    // for editing in production at writenow.media/keystatic
    kind: 'local',
  },
  ui: {
    brand: { name: 'WriteNow Media' },
  },
  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Service name' } }),
        tagline: fields.text({ label: 'One-line tagline' }),
        order: fields.integer({ label: 'Display order', defaultValue: 10 }),
        deliverables: fields.array(fields.text({ label: 'Deliverable' }), {
          label: 'Typical deliverables',
          itemLabel: (props) => props.value,
        }),
        body: fields.markdoc({ label: 'Description' }),
      },
    }),
    successes: collection({
      label: 'Successes',
      slugField: 'title',
      path: 'src/content/successes/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Project title' } }),
        client: fields.text({ label: 'Client (or "Private client")' }),
        service: fields.text({ label: 'Service category' }),
        year: fields.text({ label: 'Year' }),
        outcome: fields.text({ label: 'Outcome in one line', multiline: true }),
        featured: fields.checkbox({ label: 'Feature on homepage' }),
        body: fields.markdoc({ label: 'Case study' }),
      },
    }),
    posts: collection({
      label: 'Blog posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Publish date' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Site settings',
      path: 'src/content/settings',
      schema: {
        substackUrl: fields.url({ label: 'Substack URL' }),
        email: fields.text({ label: 'Contact email' }),
        bookingUrl: fields.url({ label: 'Booking link (Cal.com)' }),
      },
    }),
  },
});
