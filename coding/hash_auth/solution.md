### Noticing the attack vector

First I notice that there is a password hash available to us, that we need the original input from.
As they correctly used sha256, there is no way we can brute-force the original input.

However, they give us a hint with "It has something to do with security valley"
So, the password might be susceptible to a word list attack.

### Generating a word list

I used cupp to generate a word list.
Unfortunately, it doens't do "partial" leetspeech, meaning replacing single letters with numbers in a word.

I therefore had to look up the solution, on youtube: https://www.youtube.com/watch?v=1Hoon8brygA
With that, I could run hashcat to crack the hash.