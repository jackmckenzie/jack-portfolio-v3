# Print Compliance Report

![Print Compliance Report](/projects/print-compliance-report.png)

Compliance reporting for Store networks

**My role**: Lead Engineer

This feature is built for our users to easily see which stores in their store chain have printed the advertising content that has been assigned to them.

We interviewed some customers about the problems they were facing and how they were using our current, quite outdated reporting. We learned that they were using the "Export to CSV" function to perform their own analysis in Excel. With a goal being to give users what they need without reaching for other tools, we set about gathering requirements to solve this problem.

I assisted our product manager and designer by pointing out that our users would not only care that the expected media had been printed, but also that it was printed on time. To that end, we added a "Punctuality score" that shows a percentage of tickets printed vs. tickets printed on time.

I built out the front and backend for this feature using React and Django. For the backend, I wrote an API to return a set of data for use in the page's table and chart. I also implemented server-side filtering and sorting for the table and chart, with caching on the server to ensure a faster and more performant experience.

![Print Compliance Report](/projects/print-compliance-report-2.png)
