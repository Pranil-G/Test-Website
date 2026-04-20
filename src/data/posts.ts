import { BlogPost } from "../types/blog";

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "fuzzing-linux-kernel-interfaces",
    title: "Deep Dive into Fuzzing Linux Kernel Interfaces",
    excerpt: "Exploring modern techniques for discovering vulnerabilities in kernel drivers using syzkaller and custom mutations.",
    date: "2024-03-15",
    tags: ["kernel", "fuzzing", "security"],
    readingTime: "12 min read",
    content: `
# Deep Dive into Fuzzing Linux Kernel Interfaces

Fuzzing remains one of the most effective ways to find bugs in the Linux kernel. In this post, we explore how to set up Syzkaller and write custom syscall descriptions.

## Introduction to Kernel Fuzzing

The Linux kernel has a massive attack surface. User-space programs interact with it through system calls, ioctls, and shared memory.

\`\`\`c
// Example of a simple ioctl interface
long my_driver_ioctl(struct file *file, unsigned int cmd, unsigned long arg) {
    switch (cmd) {
        case MY_DRV_RESET:
            return do_reset();
        case MY_DRV_SET_VALUE:
            return set_value(arg);
        default:
            return -EINVAL;
    }
}
\`\`\`

## Using Syzkaller

Syzkaller is a coverage-guided kernel fuzzer. It uses \`syz-lang\` to describe the interface of the kernel.

### Custom Syscall Descriptions

To fuzz our custom driver, we need to add a description to Syzkaller.

\`\`\`syz
include <linux/my_driver.h>

my_drv_open(dev ptr[in, string["/dev/my_driver"]]) fd
my_drv_ioctl$MY_DRV_RESET(fd fd, cmd const[MY_DRV_RESET], arg ptr[in, int32])
my_drv_ioctl$MY_DRV_SET_VALUE(fd fd, cmd const[MY_DRV_SET_VALUE], arg ptr[in, int32])
\`\`\`

## Conclusion

Fuzzing is not just about running a tool; it is about understanding the target and providing the fuzzer with the right information.
    `
  },
  {
    id: "2",
    slug: "android-intent-redirection",
    title: "Exploiting Android Intent Redirection",
    excerpt: "A technical breakdown of how insecure Intent handling can lead to arbitrary component launches and data theft.",
    date: "2024-02-28",
    tags: ["android", "mobile", "exploit"],
    readingTime: "8 min read",
    content: `
# Exploiting Android Intent Redirection

Android applications often use Intents to pass data between components. If not handled carefully, this can lead to serious vulnerabilities.

## What is Intent Redirection?

Intent redirection occurs when an app takes an Intent from an untrusted source and passes it to a sensitive method like \`startActivity\`.

\`\`\`java
// Vulnerable Code Example
Intent untrustedIntent = getIntent().getParcelableExtra("target_intent");
if (untrustedIntent != null) {
    startActivity(untrustedIntent);
}
\`\`\`

## Impact

An attacker can use this to:
- Access private activities
- Bypass permission checks
- Steal sensitive internal data
    `
  },
  {
    id: "3",
    slug: "reverse-engineering-packed-malware",
    title: "Reverse Engineering Custom Packed Malware",
    excerpt: "Manual unpacking techniques for a recently discovered downloader sample using x64dbg and IDA Pro.",
    date: "2024-01-10",
    tags: ["re", "malware", "windows"],
    readingTime: "15 min read",
    content: "Content for RE post..."
  }
];
