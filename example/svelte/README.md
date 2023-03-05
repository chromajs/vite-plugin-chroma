# What's This?

This is the Chroma Svelte Example! It has all the packages that are needed to get started!

# What is Chroma?

Chroma is a Markdown Compiler for Svelte (and others soon)!

# How does it work?

Chroma uses a few packages to compile your Markdown script.

-   marked (used to compile markdown to html)
-   dompurify (used to prevent injection attacks on compiled markdown)

# How can I get started?

In the file **src/App.svelte** you will see a modified version of the Svelte Example.

You will see an HTML tag called \<chroma>\</chroma>.

Inside of this tag you can put Markdown (and yes, you can insert variables and reactivity into them, ie. "# Hello {name}" name will be replaced with a variable just like normal Svelte) that will be compiled to HTML at build time.

**All Markdown you put inside of chroma tags will be affected by CSS**.

# Can I edit the compiler?

Yes you certainly can! The "compiler" or preprocessor is located in **rolup.config.js** starting on **line 52**.
