var app = angular.module('app',[]);

app.controller('mainCtrl', function($scope) {

  $scope.species = [{
    name: 'C.albicans',
    overview: 'CANDIDA_ALBICANS.pdf',
    type: 2,
    mrna: 'albicans-mRNA.zip',
    rrna: 'albicans-rRNA.zip',
    genome: 'albicans_genome.fna.gz',
  },{
    name: 'C.antarctica',
    overview: 'CANDIDA_ANTARCTICA.pdf',
    type: 3,
    mrna: 'antarctica-mRNA.zip',
    rrna: 'antarctica-rRNA.zip',
    genome: 'antarctica_genome.fna.gz'
  },{
    name: 'C.auris',
    overview: 'CANDIDA_AURIS.pdf',
    type: 4,
    mrna: 'auris-mRNA.zip',
    rrna: 'auris-rRNA.zip',
    genome: 'auris_genome.fna.gz'
  },{
    name: 'C.dubliniensis',
    overview: 'CANDIDA_DUBLINIENSIS.pdf',
    type: 2,
    mrna: 'dubliniensis-mRNA.zip',
    rrna: 'dubliniensis-rRNA.zip',
    genome: 'dubliniensis_genome.fna.gz'
  },{
    name: 'C.glabrata',
    overview: 'CANDIDA_GLABRATA.pdf',
    type: 2,
    mrna: 'glabrata-mRNA.zip',
    rrna: 'glabrata-rRNA.zip',
    genome: 'glabrata_genome.fna.gz'
  },{
    name: 'C.guilliermondii',
    overview: 'CANDIDA_GUILLIERMONDII.pdf',
    type: 3,
    mrna: 'guilliermondii-mRNA.zip',
    rrna: 'guilliermondii-rRNA.zip',
    genome: 'guilliermondii_genome.fna.gz'
  },{
    name: 'C.intermedia',
    overview: 'CANDIDA_INTERMEDIA.pdf',
    type: 4,
    mrna: 'intermedia-mRNA.zip',
    rrna: 'intermedia-rRNA.zip',
    genome: 'intermedia_genome.fna.gz'
  },{
    name: 'C.kefyr',
    overview: 'CANDIDA_KEFYR.pdf',
    type: 2,
    mrna: 'kefyr-mRNA.zip',
    rrna: 'kefyr-rRNA.zip',
    genome: 'kefyr_genome.fna.gz'
  },{
    name: 'C.krusei',
    overview: 'CANDIDA_KRUSEI.pdf',
    type: 2,
    mrna: 'krusei-mRNA.zip',
    rrna: 'krusei-rRNA.zip',
    genome: 'krusei_genome.fna.gz'
  },{
    name: 'C.lusitaniae',
    overview: 'CANDIDA_LUSITANIAE.pdf',
    type: 4,
    mrna: 'lusitaniae-mRNA.zip',
    rrna: 'lusitaniae-rRNA.zip',
    genome: 'lusitaniae_genome.fna.gz'
  },{
    name: 'C.maltosa',
    overview: 'CANDIDA_MALTOSA.pdf',
    type: 2,
    mrna: 'maltosa-mRNA.zip',
    rrna: 'maltosa-rRNA.zip',
    genome: 'maltosa_genome.fna.gz'
  },{
    name: 'C.parapsilosis',
    overview: 'CANDIDA_PARAPSILOSIS.pdf',
    type: 2,
    mrna: 'parapsilosis-mRNA.zip',
    rrna: 'parapsilosis-rRNA.zip',
    genome: 'parapsilosis_genome.fna.gz'
  },{
    name: 'C.tenius',
    overview: 'CANDIDA_TENUIS.pdf',
    type: 3,
    mrna: 'tenius-mRNA.zip',
    rrna: 'tenius-rRNA.zip',
    genome: 'tenius_genome.fna.gz'
  },{
    name: 'C.tropicalis',
    overview: 'CANDIDA_TROPICALIS.docx',
    type: 2,
    mrna: 'tropicalis-mRNA.zip',
    rrna: 'tropicalis-rRNA.zip',
    genome: 'tropicalis_genome.fna.gz'
  },{
    name: 'C.utilis',
    overview: 'CANDIDA_UTILIS.pdf',
    type: 3,
    mrna: 'utilis-mRNA.zip',
    rrna: 'utilis-rRNA.zip',
    genome: 'utilis_genome.fna.gz'
  }];

  $scope.oppo = [{
    name: 'C.albicans',
    genes: [{
      name: 'BCR1.rar',
      link: 'BCR1.rar'
    },{
      name: 'CEK1.rar',
      link: 'CEK1.rar'
    },{
      name: 'EFG1.rar',
      link: 'EFG1.rar'
    },{
      name: 'ERG11.rar',
      link: 'ERG11.rar'
    },{
      name: 'HWP1.rar',
      link: 'HWP1.rar'
    },{
      name: 'TPK1.rar',
      link: 'TPK1.rar'
    }]
  },{
    name: 'C.dubliniensis',
    genes: [{
      name: 'UME6.rar',
      link: 'UME6.rar'
    }]
  },{
    name: 'C.glabrata',
    genes: [{
      name: 'EPA1.rar',
      link: 'EPA1.rar'
    },{
      name: 'PDR1.rar',
      link: 'PDR1.rar'
    },{
      name: 'STE12.rar',
      link: 'STE12.rar'
    }]
  },{
    name: 'C.kefyr',
    genes: [{
      name: '58SrRNA.rar',
      link: '58SrRNA.rar'
    }]
  },{
    name: 'C.krusei',
    genes: [{
      name: 'ABC1.rar',
      link: 'ABC1.rar'
    },{
      name: 'ERG11.rar',
      link: 'ERG12.rar'
    }]
  },{
    name: 'C.maltosa',
    genes: [{
      name: 'EAP1.rar',
      link: 'EAP1.rar'
    },{
      name: 'EPD1.rar',
      link: 'EPD1.rar'
    }]
  },{
    name: 'C.parapsilosis',
    genes: [{
      name: 'FKS.rar',
      link: 'FKS.rar'
    }]
  },{
    name: 'C.tropicalis',
    genes: [{
      name: 'SAPT3.rar',
      link: 'SAPT3.rar'
    }]
  }];

  $scope.patho = [{
    name: 'C.auris',
    genes: [{
      name: 'ERG11.rar',
      link: 'AERG11.rar'
    },{
      name: 'FKS.rar',
      link: 'AFKS.rar'
    }]
  },{
    name: 'C.lusitaniae',
    genes: [{
      name: 'ERG3.rar',
      link: 'ERG3.rar'
    }]
  }]

  $scope.sorts = [{
    name : 'All',
    type : 1
  },{
    name : 'Opportunistic ',
    type : 2
  },{
    name : 'Non- pathogenic',
    type : 3
  },{
    name : 'Pathogenic',
    type : 4
  }];

  $scope.selected = $scope.sorts[0];

  $scope.copySpecies = angular.copy($scope.species);

  $scope.classify = function(item) {
    $scope.copySpecies = [];
    if(item.type == 1){
      $scope.copySpecies = angular.copy($scope.species);
    }
    else {
      for (var i = 0; i < $scope.species.length; i++) {
        if($scope.species[i].type == item.type){
          $scope.copySpecies.push($scope.species[i]);
        }
      }
    }
  }

  $scope.openPdf = function(link) {
    window.open(link);
  }
})
