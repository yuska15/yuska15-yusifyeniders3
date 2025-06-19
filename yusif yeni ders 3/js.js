function sortByBirth(arr) {
  return arr.sort((a, b) => {
    // 'ad, doğum ili' formatını ayırırıq
    const yearA = parseInt(a.split(', ')[1]);
    const yearB = parseInt(b.split(', ')[1]);

    // Doğum illərinə görə sırala
    return yearA - yearB;
  });
}

// Nümunə istifadə:
const insanlar = [
  "Ali, 1995",
  "Zeynəb, 1987",
  "Murad, 2000",
  "Kamil, 1990"
];

console.log(sortByBirth(insanlar));
