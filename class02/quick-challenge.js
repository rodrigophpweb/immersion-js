/*
 * Create a function called calculateDiscount that receives two parameters: price (original price) and isPremiumUser (boolean).
 * If the user is premium (true), they get 20% discount.
 * If not premium (false), they get 5% discount.
 * Display the final price in the console using template string.
 *
 */

function calculateDiscount(price, isPremiumUser) {

    let isPremiunUser;
    let discount;
    let message;

    if (isPremiumUser == true) {
        discount = 0.20; // 20% discount for premium users
        message = `The final price for the premium user is: $${price - (price * discount)}`; 
    }else {
        discount = 0.05; // 5% discount for non-premium users
        message = `The final price for the regular user is: $${price - (price * discount)}`; 
    }

    console.log(message);
}

// Example usage:
calculateDiscount(100, true);  // Premium user
calculateDiscount(100, false); // Non-premium user


