let coinCount = 0; // কয়েন সংখ্যা

// Local Storage থেকে কয়েন সংখ্যা পড়া
if (localStorage.getItem("coins")) {
    coinCount = parseInt(localStorage.getItem("coins"));
    document.getElementById("coinCount").innerText = "Coins: " + coinCount;
}

// কয়েন সংখ্যা আপডেট করার সময় Local Storage আপডেট করা
function updateLocalStorage() {
    localStorage.setItem("coins", coinCount);
}

// Mine Coins বোতামে ক্লিক করলে
document.getElementById("mineButton").addEventListener("click", function() {
    coinCount += 1; // ১ কয়েন যোগ হবে
    document.getElementById("coinCount").innerText = "Coins: " + coinCount;
    updateLocalStorage(); // Local Storage আপডেট করা
});

// Complete Task বোতামে ক্লিক করলে
document.getElementById("completeTaskButton").addEventListener("click", function() {
    // অ্যাড দেখার পেজে রিডাইরেক্ট করা
    window.location.href = "ad.html"; // ad.html পেজে পাঠানো হবে
});

// Referral বোতামে ক্লিক করলে
let referralCount = 0; // রেফারেলের কাউন্টার
document.getElementById("referralButton").addEventListener("click", function() {
    referralCount++;
    coinCount += 1000; // ১০০০ কয়েন যোগ হবে
    document.getElementById("coinCount").innerText = "Coins: " + coinCount;
    document.getElementById("referralMessage").innerText = "You have referred " + referralCount + " friends!";
    updateLocalStorage(); // Local Storage আপডেট করা
});

// Claim Coins বোতামে ক্লিক করলে (ad.html এর জন্য)
document.getElementById("claimCoinsButton").addEventListener("click", function() {
    coinCount += 200; // ২০০ কয়েন যোগ হবে
    updateLocalStorage(); // Local Storage আপডেট করা
    alert("Congratulations! You have earned 200 coins!");
    window.location.href = "index.html"; // মূল পৃষ্ঠায় ফিরে যাও
});

// অ্যাড পেজে লোড হওয়ার পর
window.onload = function() {
    // ৫ সেকেন্ড পর Claim Coins বোতাম দেখাবে
    setTimeout(function() {
        document.getElementById("claimCoinsButton").style.display = "block";
    }, 5000); // ৫ সেকেন্ড পর বোতামটি দেখাবে
};
