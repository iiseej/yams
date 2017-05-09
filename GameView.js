function GameView(gameModel) {
    EventEmitter.call(this);
    this.init(gameModel);
}


GameView.prototype = Object.create(EventEmitter.prototype);
GameView.prototype.constructor = GameView;


//GameView Init
GameView.prototype.init = function(gameModel) {
    this.gameModel = gameModel;

    this.gameModel.on('setRow', this.createRows);
    this.gameModel.on('setGameColumns', this.createColumns);
    this.gameModel.on('setFigures', this.createFigures);

    this.createRows(this.gameModel.row);
    this.createColumns(this.gameModel.columns);
    this.createFigures(this.gameModel.figures);
    this.calculsHaut();
    this.calculsDiff();
    this.calculsBas();
    this.calculsFinalScore();
    this.calculsSuites();

};

var haut1 = "";
var haut2 = "";
var haut3 = "";
var haut4 = "";
var haut5 = "";
var haut6 = "";
var diff1 = "";
var diff2 = "";
var diff3 = "";
var diff4 = "";
var diff5 = "";
var diff6 = "";
var suite1 = "";
var suite2 = "";
var suite3 = "";
var suite4 = "";
var suite5 = "";
var suite6 = "";
var bas1 = "";
var bas2 = "";
var bas3 = "";
var bas4 = "";
var bas5 = "";
var bas6 = "";
var joueur1 = "";
var joueur2 = "";
var joueur3 = "";
var joueur4 = "";
var joueur5 = "";
var joueur6 = "";

for (var i = 0; i < 20; i++) {
    joueur1 += "#figures22" + i + ',';
    joueur2 += "#figures33" + i + ',';
    joueur3 += "#figures44" + i + ',';
    joueur4 += "#figures55" + i + ',';
    joueur5 += "#figures66" + i + ',';
    joueur6 += "#figures77" + i + ',';
}

for (var i = 0; i < 6; i++) {
    haut1 += "#figures22" + i + ',';
    haut2 += "#figures33" + i + ',';
    haut3 += "#figures44" + i + ',';
    haut4 += "#figures55" + i + ',';
    haut5 += "#figures66" + i + ',';
    haut6 += "#figures77" + i + ',';
}

for (var i = 8; i <= 9; i++) {
    diff1 += "#figures22" + i + ',';
    diff2 += "#figures33" + i + ',';
    diff3 += "#figures44" + i + ',';
    diff4 += "#figures55" + i + ',';
    diff5 += "#figures66" + i + ',';
    diff6 += "#figures77" + i + ',';
}

for (var i = 11; i <= 12; i++) {
    suite1 += "#figures22" + i + ',';
    suite2 += "#figures33" + i + ',';
    suite3 += "#figures44" + i + ',';
    suite4 += "#figures55" + i + ',';
    suite5 += "#figures66" + i + ',';
    suite6 += "#figures77" + i + ',';
}


for (var i = 14; i <= 19; i++) {
    bas1 += "#figures22" + i + ',';
    bas2 += "#figures33" + i + ',';
    bas3 += "#figures44" + i + ',';
    bas4 += "#figures55" + i + ',';
    bas5 += "#figures66" + i + ',';
    bas6 += "#figures77" + i + ',';
}





//hautColumn1 = hautColumn1.replace(/,\s*$/, "");
//hautColumn2 = hautColumn2.replace(/,\s*$/, "");
joueur1 = joueur1.replace(/,\s*$/, "");
joueur2 = joueur2.replace(/,\s*$/, "");
joueur3 = joueur3.replace(/,\s*$/, "");
joueur4 = joueur4.replace(/,\s*$/, "");
joueur5 = joueur5.replace(/,\s*$/, "");
joueur6 = joueur6.replace(/,\s*$/, "");
haut6 = haut6.replace(/,\s*$/, "");
diff6 = diff6.replace(/,\s*$/, "");
suite6 = suite6.replace(/,\s*$/, "");
bas6 = bas6.replace(/,\s*$/, "");

//Calucls hauts :
GameView.prototype.calculsHaut = function() {
    $(haut1 + haut2 + haut3 + haut4 + haut5 + haut6).bind("keyup change", function(e) {

        var totalHaut1 = 0;
        var totalHaut2 = 0;
        var totalHaut3 = 0;
        var totalHaut4 = 0;
        var totalHaut5 = 0;
        var totalHaut6 = 0;



        for (var i = 0; i < 6; i++) {
            totalHaut1 += Number($('#figures22' + i).val());
            totalHaut2 += Number($('#figures33' + i).val());
            totalHaut3 += Number($('#figures44' + i).val());
            totalHaut4 += Number($('#figures55' + i).val());
            totalHaut5 += Number($('#figures66' + i).val());
            totalHaut6 += Number($('#figures77' + i).val());
        }


        totalHaut1 = totalHaut1 >= 63 ? totalHaut1 + 35 : totalHaut1;
        var manqueHaut1 = 63 - totalHaut1 >= 0 ? 63 - totalHaut1 : 0;
        totalHaut2 = totalHaut2 >= 63 ? totalHaut2 + 35 : totalHaut2;
        var manqueHaut2 = 63 - totalHaut2 >= 0 ? 63 - totalHaut2 : 0;
        totalHaut3 = totalHaut3 >= 63 ? totalHaut3 + 35 : totalHaut3;
        var manqueHaut3 = 63 - totalHaut3 >= 0 ? 63 - totalHaut3 : 0;
        totalHaut4 = totalHaut4 >= 63 ? totalHaut4 + 35 : totalHaut4;
        var manqueHaut4 = 63 - totalHaut4 >= 0 ? 63 - totalHaut4 : 0;
        totalHaut5 = totalHaut5 >= 63 ? totalHaut5 + 35 : totalHaut5;
        var manqueHaut5 = 63 - totalHaut5 >= 0 ? 63 - totalHaut5 : 0;
        totalHaut6 = totalHaut6 >= 63 ? totalHaut6 + 35 : totalHaut6;
        var manqueHaut6 = 63 - totalHaut6 >= 0 ? 63 - totalHaut6 : 0;

        $('#figures226').val(manqueHaut1);
        $('#figures336').val(manqueHaut2);
        $('#figures446').val(manqueHaut3);
        $('#figures556').val(manqueHaut4);
        $('#figures666').val(manqueHaut5);
        $('#figures776').val(manqueHaut6);
        $('#figures227').val(totalHaut1);
        $('#figures337').val(totalHaut2);
        $('#figures447').val(totalHaut3);
        $('#figures557').val(totalHaut4);
        $('#figures667').val(totalHaut5);
        $('#figures777').val(totalHaut6);


    });
};

//Calculs diff :

GameView.prototype.calculsDiff = function() {
    $(diff1 + diff2 + diff3 + diff4 + diff5 + diff6).bind("keyup change", function(e) {


        var totaldiff = 0;



        for (var i = 2; i <= 7; i++) {
            if (Number($('#figures' + i + i + '8').val()) === 0) {
                totaldiff = 0;
            } else if (Number($('#figures' + i + i + '9').val()) === 0) {
                totaldiff = 0;
            } else {
                totaldiff = Number($('#figures' + i + i + '9').val()) - Number($('#figures' + i + i + '8').val()) + 20;
            }
            $('#figures' + i + i + '10').val(totaldiff);
        }

    });
};

//Calculs suites :

GameView.prototype.calculsSuites = function() {
    $(suite1 + suite2 + suite3 + suite4 + suite5+suite6).bind("keyup change", function(e) {


        var totalSuite = 0;



        for (var i = 2; i <= 7; i++) {
            totalSuite = Number($('#figures' + i + i + '11').val()) + Number($('#figures' + i + i + '12').val());
            if (totalSuite == 70) {
                totalSuite = 100;
            } else {
                totalSuite = totalSuite;
            }
            $('#figures' + i + i + '13').val(totalSuite);
        }

    });
};

//calculs bas :
GameView.prototype.calculsBas = function() {
    $(bas1 + bas2 + bas3 + bas4 + bas5 + bas6).bind("keyup change", function(e) {

        var totalBas1 = 0;
        var totalBas2 = 0;
        var totalBas3 = 0;
        var totalBas4 = 0;
        var totalBas5 = 0;
        var totalBas6 = 0;


        for (var i = 14; i <= 19; i++) {
            totalBas1 += Number($('#figures22' + i).val());
            totalBas2 += Number($('#figures33' + i).val());
            totalBas3 += Number($('#figures44' + i).val());
            totalBas4 += Number($('#figures55' + i).val());
            totalBas5 += Number($('#figures66' + i).val());
            totalBas6 += Number($('#figures77' + i).val());
        }




        $('#figures2220').val(totalBas1);
        $('#figures3320').val(totalBas2);
        $('#figures4420').val(totalBas3);
        $('#figures5520').val(totalBas4);
        $('#figures6620').val(totalBas5);
        $('#figures7720').val(totalBas6);


    });
};

//calcul final score :
GameView.prototype.calculsFinalScore = function() {
    $(joueur1 + joueur2 + joueur3 + joueur4 + joueur5 + joueur6).bind("keyup change", function(e) {

        for (var i = 2; i <= 7; i++) {
            var totalFinalScore = Number($('#figures' + i + i + '7').val()) + Number($('#figures' + i + i + '10').val()) + Number($('#figures' + i + i + '13').val()) + Number($('#figures' + i + i + '20').val());
            $('#figures' + i + i + '21').val(totalFinalScore);
        }

    });
};


GameView.prototype.createRows = function(rows) {

    var row1 = $("<div>", {
        id: "row1",
        "class": "row"
    });

    $('#container').prepend(row1);
    for (var ii = 1; ii <= this.gameModel.gameColumns + 1; ii++) {
        $('#row1').append($('<div>', {
            id: 'div1' + ii + '',
            "class": " col-sm-3"
        }));
    }

    $('#div11').html('<input disabled=\"disabled\" class="players form-control" type=\"text\" value=\"JOUEURS\">');
    $('#div12').html('<input class="players form-control" type=\"text\">');
    $('#div13').html('<input class="players form-control" type=\"text\">');
    $('#div14').html('<input class="players form-control" type=\"text\">');


    console.log('row created');
    var row2 = $("<div>", {
        id: "row2",
        "class": "row"
    });

    $('#container').append(row2);
    console.log('row created');
};

GameView.prototype.createColumns = function(gameColumns) {

  $('#row2').append($('<div>', {
      id: 'div1',
      "class": " col-sm-2"
  }));

    for (var ii = 2; ii <= this.gameModel.gameColumns + 4; ii++) {
        $('#row2').append($('<div>', {
            id: 'div' + ii + '',
            "class": " col-sm-2"
        }));
    }





    // creation des champs par joueurs.


    GameView.prototype.createFigures = function(figures) {
        var column1 = "";
        var column2 = "";
        var column3 = "";
        var column4 = "";
        var column5 = "";
        var column6 = "";
        var column7 = "";

        //$('#div1').html(column1+'<br>'+'test');
        for (var i = 0; i < figures.length; i++) {
            var divFigures1 = '<input disabled=\"disabled\" class=\"figures form-control\"type=\"text\" id="figures' + i + '" />';
            var inputColumn2 = '<input class="input form-control" id="figures22' + i + '" type=\"number\">';
            var inputColumn3 = '<input class="input form-control" id="figures33' + i + '" type=\"number\">';
            var inputColumn4 = '<input class="input form-control" id="figures44' + i + '" type=\"number\">';
            var inputColumn5 = '<input class="input form-control" id="figures55' + i + '" type=\"number\">';
            var inputColumn6 = '<input class="input form-control" id="figures66' + i + '" type=\"number\">';
            var inputColumn7 = '<input class="input form-control" id="figures77' + i + '" type=\"number\">';

            column1 += divFigures1;
            column2 += inputColumn2;
            column3 += inputColumn3;
            column4 += inputColumn4;
            column5 += inputColumn5;
            column6 += inputColumn6;
            column7 += inputColumn7;



        }
        $('#div1').html(column1);
        $('#div2').html(column2);
        $('#div3').html(column3);
        $('#div4').html(column4);
        $('#div5').html(column5);
        $('#div6').html(column6);
        $('#div7').html(column7);


        for (var ii = 0; ii < figures.length; ii++) {
            $('#figures' + ii).val(figures[ii]);

        }
        //  for (var i = 0; i < this.GameModel.figures.length; i++) {
        //    var figures = $('<div>', {id: this.game[i], "class":"col-sm-3"} );
        //  }
    };

    //

};
