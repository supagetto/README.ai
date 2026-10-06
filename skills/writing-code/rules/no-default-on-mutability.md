# No Default on Mutability

Decide whether to mutate by which version is more readable.

If mutation fits, keep it local. Do not mutate anything outside the local scope, because those changes are hard to track. Arguments count as outside: mutating one can change the value in the function that passed it.
