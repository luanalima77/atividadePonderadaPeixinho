var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload(){
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
    this.load.image('amigoDoPeixinho', 'assets/peixes/peixinho_roxo.png');
    this.load.image('outroAmigoDoPeixinho', 'assets/peixes/peixinho_azul.png');
}

function create(){
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo');
    this.add.image(100, 525, 'amigoDoPeixinho');
    this.add.image(700, 525, 'outroAmigoDoPeixinho');
    this.add.text(240, 100, 'Peixinho do Inteli', {fontSize: '2rem'});
    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false);
}

function update(){
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
