var Martim = document.getElementById("MartimClick")
var MartimCount = document.getElementById("MartimCount")



var CreditDiv = document.getElementById("Credits")


var MartimAmmount = 0
var Multiplier = 1

var AutoCoolDown = 1000
var AutoPoint = 0

var Autoclick = setInterval(() => {
    MartimAmmount += AutoPoint
    UpdatePoints()
}, AutoCoolDown)

var Discount = setInterval(() => {
    
    if (RockDiscount < 800) {
        RockDiscount += 1
    }
    RockCount.innerHTML = "-" + RockDiscount + " Martins OFF"
}, 500);

//------------ Duck Upgrade Values ------------------------------------

var DuckButton = document.getElementById("DuckBuy")
var DuckCount = document.getElementById("DuckCount")
var DuckCost = 100
var DuckAmmount = 0


//------------ Fyction Additions Values ---------------------------------
var FyctionButton = document.getElementById("FyctionBuy")
var FyctionCount = document.getElementById("FyctionCount")
var FyctionCost = 200
var FyctionAmmount = 0

//-------------- Fishe Values ---------------------------------------------

var FisheButton = document.getElementById("FisheBuy")
var FisheCount = document.getElementById("FisheCount")
var FisheCost = 200
var FisheAmmount = 0

// ---------------- Sale Values -----------------------------------------------

var RockButton = document.getElementById("RockBuy")
var RockCount = document.getElementById("RockCount")
var RockCost = 500
var RockDiscount = 0
var RockUsed = false

// -------------- Frequente Values -----------------------------------------------

var FrequenteButton = document.getElementById("FrequenteBuy")
var FrequenteCost = 999999999
var FrequenteBought = false

function UpdatePoints() {
    if (MartimAmmount == 1) {
        MartimCount.innerHTML = MartimAmmount
    } else {
        MartimCount.innerHTML = MartimAmmount
    }
}

function AddPoint() {
    MartimAmmount += 1 * Multiplier
    
    UpdatePoints()
}

function PurchaseDuck() {
    if (MartimAmmount >= DuckCost && DuckAmmount < 100) {
        MartimAmmount -= DuckCost
        DuckAmmount++
        DuckCount.innerHTML = "Tens " + DuckAmmount

        RockUsed = false
        RockButton.innerHTML = RockCost + " Martins"
        Multiplier += 1
        DuckCost += 150

        DuckButton.innerHTML = DuckCost + " Martins"
        UpdatePoints()
    } else if (DuckAmmount >= 100) {
        DuckButton.innerHTML = "Já tens muitos patos"
    }
}

function PurchaseFyction() {
    if (MartimAmmount >= FyctionCost && FyctionAmmount < 50) {
        MartimAmmount -= FyctionCost
        FyctionAmmount++
        FyctionCount.innerHTML = "Tens " + FyctionAmmount

        RockUsed = false
        RockButton.innerHTML = RockCost + " Martins"
        AutoPoint += 1
        FyctionCost += 200

        FyctionButton.innerHTML = FyctionCost + " Martins"
        UpdatePoints()
    } else if (FyctionAmmount >= 50) {
        FyctionButton.innerHTML = "Já tens muitos Fyctiones"
    }
}

function PurchaseFishe() {
    if (MartimAmmount >= FisheCost && FisheAmmount < 20) {
        MartimAmmount -= FisheCost
        FisheAmmount++
        FisheCount.innerHTML = "Tens " + FisheAmmount

        RockUsed = false
        RockButton.innerHTML = RockCost + " Martins"
        AutoCoolDown -= 20
        FisheCost += 200

        clearInterval(Autoclick);
        Autoclick = setInterval(() => {
            MartimAmmount += AutoPoint
            UpdatePoints()
        }, AutoCoolDown);

        FisheButton.innerHTML = FisheCost + " Martins"
        UpdatePoints()
    } else if (FisheAmmount >= 20) {
        FisheButton.innerHTML = "Já tens muitos Fishes"
    }
}

function PurchaseRock() {
    if (MartimAmmount >= RockCost && RockUsed == false) {
        if (DuckCost >= RockDiscount && FyctionCost >= RockDiscount && FisheCost >= RockDiscount) {
            MartimAmmount -= RockCost

            DuckCost -= RockDiscount
            if (DuckAmmount < 100) {
                DuckButton.innerHTML = DuckCost + " Martins"
            }
            
            FyctionCost -= RockDiscount
            if (FyctionAmmount < 50) {
                FyctionButton.innerHTML = FyctionCost + " Martins"
            }

            FisheCost -= RockDiscount
            if (FisheAmmount < 20) {
                FisheButton.innerHTML = FisheCost + " Martins"
            }
            
            RockUsed = true

            RockDiscount = 0
            RockButton.innerHTML = RockCost + " Martins"
            RockCount.innerHTML = "-" + RockDiscount + " Martins OFF"
            UpdatePoints()
        } else {
            RockButton.innerHTML = "Não Podes Mais Volte Sempre"
        }
        
    } else if (RockUsed == true) {
        RockButton.innerHTML = "Compra merdas"
    }
}

function PurchaseFrequente() {
    if (MartimAmmount >= FrequenteCost && FrequenteBought == false) {
        MartimAmmount -= FrequenteCost
        FrequenteBought = true

        CreditDiv.style = "bottom: 0vh; animation-name: Credits; animation-duration: 4s; animation-timing-function: ease-in-out;"

        UpdatePoints()
    }
}

Martim.addEventListener("mousedown", () => {
    Martim.style = "width: 280px; margin-top: 32%;"
    AddPoint()
})

Martim.addEventListener("mouseup", () => {
    Martim.style = "width: 300px;"
})

Martim.addEventListener("mouseleave", () => {
    Martim.style = "width: 300px;"
})