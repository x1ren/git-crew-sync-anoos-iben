\# Git Crew Sync Lab Workflow Report



\## Evidence Screenshots



\### Task 1: Successful Push from Clone A

!\[Task 1](screenshots/task1.png)



\### Task 2: Rejected Push from Clone B

!\[Task 2](screenshots/task2.png)



\### Task 3: Merge Conflict Resolution \& Push

!\[Task 3](screenshots/task3.png)



\### Task 4: Second Rejected Push \& Rebase Resolution

!\[Task 4 - Rejected](screenshots/task4a.png)

!\[Task 4 - Rebase](screenshots/task4.png)



\### Task 5: Main Updated and Pushed

!\[Task 5](screenshots/task5.png)



\### Task 6: Tag v1.0-synced Created and Pushed

!\[Task 6](screenshots/task6.png)



\---



\## Lab Reflection Questions



\### 1. What did the rejected push error message tell you, and why did it happen?

The error message (`! \[rejected] ... (fetch first)`) stated that updates were rejected because the remote tracking branch contains commits that do not exist in the local working copy. Git rejects non-fast-forward updates by default to prevent developers from accidentally overwriting upstream commits published by others. It happened because another clone had pushed commits to GitHub on the same branch, causing the local branch tip to fall behind and diverge from the remote branch tip.



\### 2. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

\* \*\*Merge (Task 3):\*\* Joins divergent branch histories by creating an explicit \*\*merge commit\*\* with two parent pointers (one pointing to the local branch tip and one to the remote branch tip). It preserves the original chronological order and commit hashes, displaying a branching and joining graph in Git history.

\* \*\*Rebase (Task 4):\*\* Re-applies local commits one by one on top of the remote upstream commit history. It rewinds local commits, advances the base pointer to the tip of `origin/feature/overtime-pay`, and recreates each local commit with new commit hashes (SHAs). This avoids creating an additional merge commit, producing a clean, strictly linear Git commit history.



\### 3. What one habit would have avoided both rejected pushes in this lab?

\*\*Always pulling or fetching latest changes before beginning work and immediately prior to pushing.\*\* Running `git pull` or `git fetch` with status checks ensures that local working branches remain synchronized with upstream work, preventing divergent histories and non-fast-forward push rejections.



\### 4. Which approach - merge or rebase - would you default to on a shared team branch, and why?

\*\*Default to merge on a shared team branch.\*\* Rebasing rewrites history and generates new commit hashes for existing commits. If multiple developers are actively working against the same shared branch, rewriting commits can desynchronize their local working trees, causing duplicated commits or necessitating risky force pushes (`--force-with-lease`). A standard merge preserves the historical timeline without altering existing published commits, making collaboration safer on shared branches.

