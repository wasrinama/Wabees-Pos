export function calculateTax(cart) {
    // Simple 10% tax calculation
    const taxableAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity - item.discount), 0);
    return taxableAmount * 0.10;
  }