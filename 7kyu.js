function getIssuer(number) {
    const numberStr = number.toString();
    const length = numberStr.length;

    if (length === 15 && (numberStr.startsWith("34") || numberStr.startsWith("37"))) {
        return "AMEX";
    } else if (length === 16 && numberStr.startsWith("6011")) {
        return "Discover";
    } else if (
        length === 16 &&
        ["51", "52", "53", "54", "55"].includes(numberStr.substring(0, 2))
    ) {
        return "Mastercard";
    } else if (
        (length === 13 || length === 16) &&
        numberStr.startsWith("4")
    ) {
        return "VISA";
    } else {
        return "Unknown";
    }
}
