document.addEventListener("DOMContentLoaded", (function () {
  var e = ["Δημήτρης Μιχάλαρος", "Φωτεινή Ξενοπούλου ", "Κατερίνα Ηλιοπούλου", "Ευγενία Γιαννάκη", "Λυδία Αλεξίου", "Κωνσταντίνα Γεωργίου", "Μαρία Παπαδάκη ", "Ειρήνη Παπακώστα"],
    t = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    n = document.querySelector(".alert"), a = n.querySelector(".alert__name"), r = n.querySelector(".alert__city"),
    o = n.querySelector(".alert__count"), l = "alert--show", c = null;

  function i(e, t) {
    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
  }

  c = setInterval((function u() {
    if (n.classList.contains(l)) return clearInterval(c), void (c = setInterval(u, i(26e3, 34e3)));
    s = e[i(0, e.length - 1)], d = t[i(0, t.length - 1)], v = i(2, 4), a.textContent = s, r.textContent = d, o.textContent = v, n.classList.add(l), setTimeout((function () {
      n.classList.remove(l)
    }), 1e4);
    var s, d, v
  }), i(26e3, 34e3))
}));