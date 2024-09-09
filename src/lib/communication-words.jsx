const commWords = [
  {
    id: "cw_1",
    body: "abandon ability able about above abroad absence absolute absolutely absorb abuse academic accept acceptable access accident accommodation accompany according to account accurate accuse achieve achievement acid acknowledge acquire across act action active activist activity actor actual actually ad adapt add addition additional address address adequate adjust administration administrative admire admission admit adopt adult advance advanced advantage advert advertise advertisement advertising advice advise adviser affair affect afford afraid after afternoon afterwards again against age aged agency agent aggressive ago agree agreement agriculture ahead aid aim air aircraft airline airport alarm album alcohol alive all allow allowance almost alone along along alongside",
  },
  {
    id: "cw_2",
    body: "also alter alternative although altogether always amazing ambition ambulance among amount an analyse analysis analyst ancient and anger angle angry animal announce announcement annoy annual another answer anticipate anxiety anxious any anybody anyhow anyone anything anyway anywhere apart apartment apologize apology apparent apparently appeal appear appearance apple application apply appoint appointment appreciate approach appropriate approval approve approximate architect architecture area argue argument arise arm armed army around arrange arrangement arrest arrival arrive art article artificial artist as ashamed aside ask asleep aspect assess assessment assignment assist assistance assistant associate association assume assumption assure at atmosphere attach attack attack attempt attend attention attitude attorney attract",
  },
  {
    id: "cw_3",
    body: "attraction attractive audience aunt author authority automatic automatically autumn available average avoid awake award aware awareness away awful awkward baby back background backwards bacon bad badly bag bake balance ball ban band bang bank bar barrier base baseball basic basically basis basket bat bath bathroom battery battle be beach bean bear beard beat beautiful beauty because because become bed bedroom beef beer before beforehand begin beginning behalf behave behaviour behind being belief believe bell belong below belt bench bend beneath benefit beside best bet better between beyond bicycle bid big bike bill bin bird birth birthday biscuit bit bit bite bite bitter black blade blame blank bless blind block",
  },
  {
    id: "cw_4",
    body: "bloke blonde blood blow blue board boat body boil boiler boiling bomb bone bonus book boom boot border bored boring born borrow boss both bother bottle bottom bounce bound bowl box boy boyfriend brain branch brave bread break breakfast breast breath breathe brick bridge brief briefly bright brilliant bring broad brother brown brush buck bucket buddy budget bug build builder building bump bunch burn burst bury bus business busy but butcher butter button buy buyer by bye cabinet cable cake calculate calculation calculator calendar call calm camera camp campaign can cancel cancer candidate candle candy cap capable capacity capital captain capture car card care career careful carefully carpet",
  },
  {
    id: "cw_4",
    body: "carrot carry cartoon case cash cast castle cat catalogue catch category cause cause CD cease ceiling celebrate celebration cell cellphone cent centimetre central centre century cereal certain certainly certificate chain chair chairman challenge champion championship chance change channel chap chapter character characteristic characterize charge charity chart chase chat cheap cheat check cheek cheese chemical chemist chemistry cheque cherry chest chicken chief child childhood chip chocolate choice choose chop chuck church cigarette cinema circle circuit circumstance citizen city civil claim claim class classic classical classroom clean cleaner clear clearly clerk clever click client climate climb clock close closed closely closet cloth clothes cloud club clue coach coal coast coat code coffee coin cold collapse collar",
  },
  {
    id: "cw_5",
    body: "collect collection college colour column combination combine come comfort comfortable command comment commercial commission commit commitment committee common communicate communication community company compare comparison compete competition competitive complain complaint complete completely complex complicated component comprehensive comprise computer concentrate concentration concept concern concerned concerning concert conclude conclusion condition conduct conference confidence confident confine confirm conflict confused confusing confusion congratulation connect connection conscious consciousness consent consequence consider considerable considerably consideration consist consistent constant constantly constitute construct construction consult consumer consumption contact contain contemporary content contest context continue continuous contract contrast contribute contribution control convenient convention conventional conversation convert conviction convince cook cooker cookie cool cooperation cope copy core corn corner correct corridor cost cottage cotton could council count",
  },
  {
    id: "cw_6",
    body: "counter country countryside county couple courage course court cousin cover cow crack craft crash crazy create creation creative creature credit crew crime criminal crisis criterion critic critical criticism criticize crop cross crowd crown crucial cruel cry cultural culture cup cupboard curious currency current currently curtain curve cushion custom customer cut cute cycle dad daddy daft daily damage dance danger dangerous dare dark darkness darling data database date daughter day dead deaf deal dealer dear death debate debt decade decent decide decision declare decline deep deeply defeat defence defend define definite definitely definition degree delay deliberately deliver delivery demand democracy democratic demonstrate demonstration dentist deny department departure",
  },
  {
    id: "cw_7",
    body: "depend dependent deposit depression depth derive describe description desert deserve design designer desire desk desperate despite destroy destruction detail detailed detect determination determine determined develop development device devil diagram diamond diary die diet differ difference different difficult difficulty dig dimension dinner direct direction directly director directory dirt dirty disabled disagree disappear disappoint disappointed disaster disc discipline discount discover discovery discuss discussion disease disgusting dish disk dismiss display dispute distance distant distinct distinction distinguish distribute distribution district disturb divide division divorce do doctor document dog dollar domestic dominant dominate door dot double doubt down downstairs downtown dozen draft drag drama dramatic draw drawer drawing dream dress drink drive driver drop drug drunk dry duck",
  },
  {
    id: "cw_8",
    body: "dude due dull dump during dust duty DVD each ear early earn earth ease easily east eastern easy eat economic economics economy edge edition editor education educational effect effective effectively efficiency efficient effort egg either elderly elect election electric electrical electricity electronic element elevator else elsewhere email embarrassed emerge emergency emotion emotional emphasis emphasize empire employ employee employer employment empty enable encounter encourage encouraging end enemy energy engage engine engineer engineering enhance enjoy enjoyable enormous enough enquiry ensure enter enterprise entertainment enthusiasm enthusiastic entire entirely entitle entrance entry envelope environment environmental equal equally equipment equivalent era error escape especially essay essential essentially establish establishment estate estimate ethnic even evening event eventually",
  },
  {
    id: "cw_9",
    body: "ever every everybody everyone everything everywhere evidence evil exact exactly exam examination examine example excellent except exception exchange excitement exciting exclude excuse executive exercise exercise exhibition exist existence existing exit expand expansion expect expectation expenditure expense expensive experience experienced experiment experimental expert explain explanation explore explosion export expose express expression extend extension extensive extent external extra extraordinary extreme extremely eye face facility fact factor factory fail failure fair fairly faith fall false familiar family famous fan fancy fantastic far farm farmer fascinating fashion fast fat father fault favour favourite fear feature federal fee feed feedback feel feeling fellow female fence festival fetch few field fight figure file",
  },
  {
    id: "cw_10",
    body: "fill film filthy final finally finance financial find finding fine finger finish fire firm first firstly fish fishing fit fix fixed flash flat flavour flesh flight flood floor flow flower fly focus fold folk follow following food foot football for force foreign forest forever forget forgive fork form formal formally formation former formula forth fortnight fortunate fortune forward foundation frame frankly free freedom freeway freeze freezer frequent frequently fresh fridge friend friendly friendship frightened from front fruit fry fuel fulfil full fully fun function fund fundamental funeral funny furniture further fuss future gain gallery game gang gap garage garbage garden garlic gas gasoline gate",
  },
  {
    id: "cw_11",
    body: "gather gay gear gene general generally generate generation generous gentle gentleman gently genuine get giant gift girl girlfriend give glad glance glass global glove go goal god gold golden golf good goodbye goodness goods gorgeous gosh govern government governor grab grade gradually gram grammar grand grandad grandfather grandma grandmother grandpa granny grant graph grass grateful great greatly green grey grocery gross ground group grow growth guarantee guard guess guest guidance guide guilty guitar gun guy habit hair half halfway hall hand handbag handle handy hang happen happy hard hardly harm hat hate have he head head headquarters health healthy hear hearing heart heat heater heating heaven",
  },
  {
    id: "cw_12",
    body: "heavily heavy height hell hello help helpful hence her here hero hers herself hesitate hi hide high highlight highly highway hill him himself hire his historian historical history hit hold holder holding hole holiday holy home homework honest honestly honey honour hook hope hopefully hopeless horrible horror horse hospital host hot hotel hour house household housing how however huge human hungry hunt hurry hurt husband ice idea ideal identity idiot if ignore ill illegal illness illustrate image imagination imagine immediate immediately impact implement implication imply import importance important impose impossible impress impression impressive improve improvement in inch incident include including income incorporate increase increasingly incredible incredibly indeed independence independent",
  },
  {
    id: "cw_12",
    body: "index indicate indication individual individual industrial industry inevitable inevitably infant infection inflation influence inform informal information initial initially initiative injure injury inner innocent innovation input inquiry insect inside insist inspection inspector install instance instant instead institute institution instruction instrument insurance intellectual intelligence intelligent intend intense intention interaction interest interested interesting internal international internet interpret interpretation interval intervention interview interview into introduce introduction invest investigate investigation investment invite involve involved involvement iron island issue it item its itself jacket jam job join joint joke journalist journey joy judge judgment juice jump jumper junior jury just justice justify keen keep kettle key keyboard kick kid kill kilometre kind kind king kiss kit kitchen knee knife knock",
  },
  {
    id: "cw_13",
    body: "know knowledge known lab label laboratory labour lack lad ladder lady lake lamb lamp land landlord landscape lane language large largely last late later latter laugh launch law lawyer lay layer lazy lead leader leadership leading leaf league lean learn least leather leave leave lecture left leg legal legislation leisure lend length less lesson let letter level liberal library licence lick lid lie life lift light lighting like likely limit limitation limited line link lip liquid list listen literally literary literature little live lively living load loan local locate location lock log logical lonely",
  },
  {
    id: "cw_14",
    body: "long look loose lord lorry lose loss lost lot loud lounge love lovely lover low lower luck luckily lucky lump lunch lunchtime machine machinery mad madam magazine magic mail main mainly maintain maintenance major majority make male male mall man manage management manager manner manufacturer manufacturing many map march margin mark market marketing marriage married marry marvellous mass massive master match mate material math maths matter maximum may maybe me meal mean meaning means meanwhile measure measurement meat mechanism media medical medicine medieval medium meet meeting member membership memory mental mention menu mere merely mess message messy metal method metre middle midnight might mile military milk millimetre",
  },
  {
    id: "cw_15",
    body: "mind mine mineral minimum minister ministry minor minority minute mirror misery miss mission mistake mix mixed mixture mobile mode model modern mom moment mommy money monitor month mood moon moral more moreover morning mortgage most mostly mother motion motor motorway mountain mouse mouth move movement movie much mud mum mummy murder muscle museum mushroom music musical must my myself mystery nail naked name narrow nasty nation national native natural naturally nature naughty near nearby nearly neat necessarily necessary neck need negative negotiate negotiation neighbour neighbourhood neither nerve nervous net network never nevertheless new newly news newspaper next nice nicely night nil no nobody nod",
  },
  {
    id: "cw_16",
    body: "noise noisy none nonsense nope nor normal normally north northern nose not notably note nothing notice notion novel now nowadays nowhere nuclear nuisance number numerous nurse nut object objection objective obligation observation observe obtain obvious obviously occasion occasional occasionally occupation occupy occur ocean o’clock odd odds of off offence offer office officer official often oil OK old on once one onion only onto open opening operate operation operator opinion opponent opportunity oppose opposite opposition option or orange order ordinary organ organic organization organize organized origin original originally other otherwise ought ounce our ours ourselves out outcome output outside outstanding oven over overall overcome overseas",
  },
  {
    id: "cw_17",
    body: "overtime owe own owner ownership pace pack package packet pad page pain paint painting pair palace pale pan panel panic pants paper parcel pardon parent park parking parliament part participate particular particularly partly partner partnership party pass passage passenger passion past path patience patient patient pattern pause pay payment peace peaceful peak pen penalty pencil penny pension people pepper per perceive percent percentage perception perfect perfectly perform performance perhaps period permanent permission permit person personal personality personally personnel perspective persuade petrol phase philosophy phone photo photocopy photograph phrase physical physically physics piano pick picture pie piece pig pile pill pilot pin pink pint pipe pitch pity pizza place plain plan plane planet plant",
  },
];

export default commWords;
