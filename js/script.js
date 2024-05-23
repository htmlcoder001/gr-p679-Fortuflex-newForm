setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", (function () {
  $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
}));
const OFFER = "«Fortunella»";
let now = new Date, mm = now.getMonth() + 1, day = now.getDate(), year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange = [
  {m: "Γεια σας, το όνομά μου είναι Αναστάσιος Προκοπίου. Είμαι ορθοπεδικός τραυματολόγος, φυσικοθεραπευτής και ρεφλεξολόγος. Καλώς ήρθατε στον ιστότοπό μου. "},
  {m: "Εδώ προσφέρω δωρεάν διαδικτυακά διαγνωστικά και εξατομικευμένες συστάσεις που έχουν βοηθήσει χιλιάδες ασθενείς μου να απαλλαγούν από τον πόνο και να επιδιορθώσουν τις κατεστραμμένες αρθρώσεις.  "},
  {m: "Για να λάβετε πλήρεις συμβουλές σχετικά με τον τρόπο βελτίωσης της κατάστασης των αρθρώσεων σας, απαντήστε σε μερικές ερωτήσεις:"},
  {m: '<p class="quest">Ποια συμπτώματα σας ανησυχούν περισσότερο;</p>'},
  {m: '<p class="quest">Πόσο καιρό έχετε προβλήματα στις αρθρώσεις;</p>'},
  {m: '<p class="quest">Σε ποιες αρθρώσεις αισθάνεστε δυσφορία;</p>'},
  {m: '<p class="quest">Πόσο συχνά αντιμετωπίζετε πόνο ή περιορισμούς κίνησης;</p>'},
  {m: '<p class="quest">Ποια είναι η ηλικία σας;</p>'},
  {m: '<p class="quest">Ποιο είναι το τωρινό σας βάρος;</p>'},
  {m: '<p class="quest">Τι ύψος έχετε;</p>'},
  {m: "Ευχαριστώ. Φυσικά, τα σημάδια προκαλούν ορισμένες ανησυχίες, αλλά αξίζει να καταλάβετε ότι είστε αρκετά ικανοί να αποκαταστήσετε πλήρως τις αρθρώσεις σας. Η πραγματική αιτία του πόνου στις αρθρώσεις είναι πάντα η ίδια - οι αρθρώσεις, οι σπόνδυλοι και οι χόνδροι χάνουν την ελαστικότητά τους. Φθείρονται λόγω υπερβολικής άσκησης, υπερβολικού βάρους και ηλικίας. Το βασικό μυστικό είναι να αποκαταστήσετε τις αρθρώσεις με τον σωστό τρόπο."},
  {m: "Μια σύσταση για εσάς προσωπικά. Μεντόλη, φαρμακευτικό κοφρέι, άγριο τσίλι, εσπεριδοειδές ευκάλυπτος, καστανιά."},
  {m: "Μεντόλη: ανακουφίζει από τον πόνο, καταπραΰνει, εξαλείφει τη φλεγμονή, βοηθά στην ενίσχυση των συνδέσμων, των τενόντων, των μυών και αποκαθιστά την κινητικότητά τους."},
  {m: "Φαρμακευτικό κοφρέι: βοηθά με ασθένειες του μυοσκελετικού συστήματος, μειώνει τη φλεγμονή και το πρήξιμο, σταματά την καταστροφή του ιστού χόνδρου, αποκαθιστά την κινητικότητα των αρθρώσεων και ενισχύει τα αιμοφόρα αγγεία."},
  {m: "Άγρια πιπεριά τσίλι: βελτιώνει τη ροή του αίματος, τη ροή των λεμφαδένων, αυξάνει την ελαστικότητα των ιστών του χόνδρου, εξαλείφει τη συμφόρηση, το πρήξιμο και θρέφει τα κύτταρα με χρήσιμα συστατικά."},
  {m: "Ευκάλυπτος εσπεριδοειδών: καταπολεμά τα μικρόβια, προάγει την ταχύτερη αποκατάσταση των ιστών που έχουν υποστεί βλάβη, ανακουφίζει από τον πόνο, εξαλείφει το πρήξιμο και συμμετέχει στη σύνθεση του αρθρικού υγρού."},
  {m: "Σπόροι καστανιάς: σταματά τη φλεγμονώδη διαδικασία, καταστρέφει τους παθογόνους παράγοντες, μειώνει το χρόνο αναγέννησης των ιστών που έχουν υποστεί βλάβη, ενισχύει τους συνδέσμους και τις αρθρώσεις και αποκαθιστά την κινητικότητά τους στο φυσιολογικό."},
  {m: "Αυτά τα συστατικά μπορούν να χρησιμοποιηθούν ξεχωριστά, αλλά είναι πολύ πιο βολικό και αποτελεσματικό να τα χρησιμοποιείτε ως μέρος του συμπλέγματος Fortuflex. Υπάρχουν με τη μορφή εντατικών εκχυλισμάτων με μέγιστη συγκέντρωση θρεπτικών ουσιών."},
  {m: "Για να αποκαταστήσετε τις αρθρώσεις, αρκεί να το χρησιμοποιείτε δύο φορές την ημέρα: πρωί και βράδυ πριν πάτε για ύπνο. Σε μόλις ένα μήνα, θα είστε σε θέση να επιτύχετε τον στόχο σας. "},
 
  {m: 'Από τι αποτελείται η κρέμα Fortuflex: <br><br> <img src="images/prod.png" class="product-img" style="width: 100%; max-width: 160px;"> '},
  {m: "Η κρέμα περιέχει τα πιο συμπυκνωμένα εκχυλίσματα φυσικών θεραπευτικών συστατικών που ενεργοποιούν τη διαδικασία αποκατάστασης του χόνδρου και του σάκου των αρθρώσεων, αυξάνουν τις ιδιότητες απορρόφησης κραδασμών του χόνδρου και διεγείρουν τη σύνθεση υαλουρονικού οξέος."},
  {m: "Ως εκ τούτου, το Fortuflex είναι μια πολύ αποτελεσματική θεραπεία για το μυοσκελετικό σύστημα. Εξαλείφει την αιτία των προβλημάτων και αποκαθιστά την υγεία των αρθρώσεων, της σπονδυλικής στήλης και του χόνδρο. Από την πρώτη μέρα, ξεκινά τη διαδικασία αναγέννησης του σώματος. Επιπλέον, εξαλείφει τον πόνο, θα το παρατηρήσετε αμέσως."},
  {m: "Η κρέμα δρα σε κυτταρικό επίπεδο, αποκαθιστώντας την κυκλοφορία του αίματος. Αντιμετωπίζει τυχόν προβλήματα στις αρθρώσεις, είτε πρόκειται για αρθροπάθεια, αρθρίτιδα, ισχιαλγία, ρευματισμούς, ριζίτιδα ή οστεοχονδρόζη, ακόμη και ρωγμές στους σπονδύλους. Μώλωπες, χτυπήματα, κατάγματα, και άλλα προβλήματα μπορούν να αντιμετωπιστούν με αυτή την κρέμα."},
  {m: 'Εδώ είναι τα αποτελέσματα των πελατών μου που έχουν αποκαταστήσει επιτυχώς τις αρθρώσεις τους χρησιμοποιώντας τις συστάσεις μου: <br> <br><img src="images/comm-photo3-135-arb.jpg"> <br> <img src="images/comm2-92a-arb.jpg"> <br> <img src="images/comm6-abb-arb.jpg"> '},
  {m: "Η προτεινόμενη διάρκεια της θεραπείας, λαμβάνοντας υπόψη τα συμπτώματα, την ηλικία, το τρέχον βάρος και τον τρόπο ζωής σας, θα είναι κατά μέσο όρο περίπου 60 ημέρες."},
  {m: "Κατά τη διάρκεια αυτής της θεραπείας, υπάρχει βαθιά επούλωση των οστών και του χόνδρινου ιστού, του αρθρικού υγρού, των μυϊκών ινών, συνδετικών ιστών, των αιμοφόρων αγγείων και των τενόντων."},
  {m: "Έχω επίσης υπέροχα νέα για εσάς. Διαγνώστηκες μέσω Διαδικτύου και έγινες ο 2000ος πελάτης μου."},
  {m: "Μπορείτε να αποκτήσετε το Fortuflex σε τιμή προσφοράς εισάγοντας το όνομα και τον αριθμό τηλεφώνου σας στην παρακάτω φόρμα παραγγελίας. Η ποσότητα της κρέμας σε προσφορά είναι περιορισμένη, γι' αυτό σας συμβουλεύω να βιαστείτε με την παραγγελία σας."}
];
var mass_id = 0, length_mass = 0, lengt_num_mas = 0, text = "", speedtext = 35, process = !0;

function app() {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2), t = ("0" + e.getHours()).slice(-2) + ":" + s;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var n = $(".inp").val();
    $(".inp").val(++n)
  }
  const a = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + t + "</p></div></div></div>";
  $(".chat-content-list").append(a), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
  var s = new Date, t = ("0" + s.getMinutes()).slice(-2);
  let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + '</p><p class="message-time" id="time"><span>' + ("0" + s.getHours()).slice(-2) + ":" + t + '</span><span class="icon_ack" data-testid="msg-dblcheck" aria-label=" Прочитано " data-icon="msg-dblcheck" ><svg viewBox="0 0 16 15" width="16" height="15" ><path fill="currentColor" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></p></div></div></div>';
  $(".chat-content-list").append(n), $(".content").animate({scrollTop: $(".chat-content-list").height()}, 700), $("#scroll_id").addClass("hide")
}

function question1() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">Δυσφορία</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">Πόνος</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">Περιορισμός των κινήσεων</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Αδυναμία κίνησης</span></div></div>')
}

function choise1() {
  $(".question1M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Δυσφορία"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Πόνος"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Περιορισμός των κινήσεων"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Αδυναμία κίνησης"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question2() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Λιγότερο από ένα χρόνο πριν</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">1-3 χρόνια πριν</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">3-5 χρόνια πριν</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Περισσότερα από 5 χρόνια πριν</span></div></div>')
}

function choise2() {
  $(".question2M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Λιγότερο από ένα χρόνο πριν"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("1-3 χρόνια πριν"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("3-5 χρόνια πριν"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Περισσότερα από 5 χρόνια πριν"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question3() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Αχενική περιοχή</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Άνω ωμική ζώνη (ώμοι, αγκώνες, χέρια)</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Τμήμα λεκάνης - ισχίου</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Κάτω άκρα (γόνατα, πόδια, δάχτυλα)</span></div></div>')
}

function choise3() {
  $(".question3M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Αχενική περιοχή"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Άνω ωμική ζώνη (ώμοι, αγκώνες, χέρια)"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Τμήμα λεκάνης - ισχίου"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Κάτω άκρα (γόνατα, πόδια, δάχτυλα)"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question4() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Μερικές φορές το μήνα</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Μερικές φορές την εβδομάδα</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Μερικές φορές την ημέρα</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Είμαι σε συνεχή πόνο</span></div></div>')
}

function choise4() {
  $(".question4M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Μερικές φορές το μήνα"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Μερικές φορές την εβδομάδα"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Μερικές φορές την ημέρα"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Είμαι σε συνεχή πόνο"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question5() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Έως 30 χρονών</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">30-45 ετών</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">46-60 ετών</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">Περισσότερα από 60 χρόνια</span></div></div>')
}

function choise5() {
  $(".question5M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Έως 30 χρονών"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("30-45 ετών"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("46-60 ετών"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Περισσότερα από 60 χρόνια"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })) 
}

function question6() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Έως 50 κιλά</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">50 έως 70 κιλά</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">από 71 έως 90 κιλά</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">Περισσότερο από 90 κιλά</span></div></div>')
}

function choise6() {
  $(".question6M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Έως 50 κιλά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("50 έως 70 κιλά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("από 71 έως 90 κιλά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })),  $(".question6O").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Περισσότερο από 90 κιλά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question7() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Κάτω από 150 εκατοστά</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-165 εκατοστά</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">166-180 εκατοστά</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">Περισσότερο από 180 εκατοστά</span></div></div>')
}

function choise7() {
  $(".question7M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Κάτω από 150 εκατοστά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("150-165 εκατοστά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("166-180 εκατοστά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7G").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Περισσότερο από 180 εκατοστά"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

setTimeout((() => {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2);
  const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + ("0" + e.getHours()).slice(-2) + ":" + s + "</p></div></div></div>";
  $(".chat-content-list").append(t), $("#scroll_id").click((function (e) {
    $(this).removeClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700)
  }));
  const n = setInterval((function () {
    1 == process && (lengt_num_mas != massange.length ? (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length && (lengt_num_mas++, mass_id++, length_mass = 0, text = "", app())) : (clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), start_timer()))
  }), speedtext)
}), 10), $(".content").scroll((function () {
  "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}));
var $marker = $("#down-box");
$(".content").scroll((function () {
  $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
}));
let intr, time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3)
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60), s = time - 60 * e;
  0 == e && 0 == s && clearInterval(intr), s = s >= 10 ? s : "0" + s, $("#min").html("0" + e), $("#sec").html(s)
}