function find_star_net(star){
    var starCollection = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    var starNet = ["Ursa", "Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa", "Major", "Leo"];
    for (i = 0; i < starCollection.length; i++) {
        if (star == starCollection[i]){
            alert ("This star belongs to " + starNet[i]);
        }
    }
}