function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if (num < 10) { ret = "0" + num; } else { ret = num; }
    return ret;
}

function showClock() {
    var nowTime = new Date();
    var nowMonth = set2fig(nowTime.getMonth() + 1);
    var nowDay = set2fig(nowTime.getDate());
    var nowHour = set2fig(nowTime.getHours());
    var nowMin = set2fig(nowTime.getMinutes());
    var nowSec = set2fig(nowTime.getSeconds());
    var msg = "現在時刻" + nowMonth + "/" + nowDay + " " + nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("time").innerHTML = msg;
    console.log(msg);

    var MonthDay = "" + nowMonth + nowDay;
    var HourMin = "" + nowHour + nowMin;
    console.log(MonthDay);
    console.log(HourMin);
    if (MonthDay == 1103) {
        if (1100 <= HourMin && 1130 > HourMin) {
            document.getElementById("DJtime").innerHTML = "11:00-11:30";
            document.getElementById("DJ").innerHTML = "yakiya";
            document.getElementById("icon").src = "../img/yakiya.jpg";
            document.getElementById("comment").innerHTML = "遊びに行った工陵祭にて「クラブイベント」と邂逅。受験前にも関わらず、音研に入る事を志す。入学当初はUK Hardcoreや音楽ゲーム曲を軸とした活動を行っていたが、先輩の勧めによりアイカツ！に魅了され、アニソンDJも意欲的に取り組む様になる。お洒落サウンドが軸なプレイを得意とし、中野heavysick ZERO「2D-iDOL-FESTiVAL!!」では二次元アイドルオンリー、栃木県下野市「いしあに!!」ではアニソンDJとして活動中。また、栃木県宇都宮市「A_motions」のメンバー。";
        } else if (1130 <= HourMin && 1210 > HourMin) {
            document.getElementById("DJtime").innerHTML = "11:30-12:10";
            document.getElementById("DJ").innerHTML = "4mくん";
            document.getElementById("icon").src = "../img/4m.jpg";
            document.getElementById("comment").innerHTML = "唯一無二才色兼備の僕です";
        } else if (1210 <= HourMin && 1240 > HourMin) {
            document.getElementById("DJtime").innerHTML = "12:10-12:40";
            document.getElementById("DJ").innerHTML = "CELL";
            document.getElementById("icon").src = "../img/cell.jpg";
            document.getElementById("comment").innerHTML = "家でDJしながら飛び跳ねるのが趣味。最近、「これ好き！」ってなる曲が多くて嬉しい。たぶんVTuberの曲をかけます。";
        } else if (1240 <= HourMin && 1330 > HourMin) {
            document.getElementById("DJtime").innerHTML = "12:40-13:30";
            document.getElementById("DJ").innerHTML = "ごこめ";
            document.getElementById("icon").src = "../img/gokome.jpg";
            document.getElementById("comment").innerHTML = "最近Vtuberにハマりだしたサブカルオタク受験生。中学時代にオタクになり、その後、高校デビューを目指しオタク脱却を願ったがアニソンの沼にハマってしまい断念。unsigned2017に訪れたのをきっかけにアニソンDJをスタート。主にkz(livetune)の手掛ける楽曲が好き。DJ歴3年に満たない若手なのでお手柔らかにお願いします。";
        } else if (1330 <= HourMin && 1400 > HourMin) {
            document.getElementById("DJtime").innerHTML = "13:30-14:00";
            document.getElementById("DJ").innerHTML = "サブレ";
            document.getElementById("icon").src = "../img/sabure.jpg";
            document.getElementById("comment").innerHTML = "4回目のUnsigned参戦で今年からOB。3年前のUnsignedにて特撮オンリーでDJデビューしてから、北関東のアニクラを中心に遊びに行きながら活動中。群馬に引っ越したけどやっぱり小山のラーメンが好き！埼玉も好き。";
        } else if (1400 <= HourMin && 1430 > HourMin) {
            document.getElementById("DJtime").innerHTML = "14:00-14:30";
            document.getElementById("DJ").innerHTML = "880";
            document.getElementById("icon").src = "../img/880.jpg";
            document.getElementById("comment").innerHTML = "DJサークルunsignedでDJを始める．2016年からアニソンDJを始め，RSBKosen(秋葉原MOGRA)やアニ箱(音楽喫茶Sabaco)等学生主体のイベントの主催を経て，DJみどりに栃木県のアニソンイベント，いしあに!!に誘われイベントのアニソンDJとしてキャリアを始める．青春モノアニメとほのぼのとしたアニメが好き．";
        } else if (1430 <= HourMin && 1500 > HourMin) {
            document.getElementById("DJtime").innerHTML = "14:30-15:00";
            document.getElementById("DJ").innerHTML = "Hokke";
            document.getElementById("icon").src = "../img/hokke.jpg";
            document.getElementById("comment").innerHTML = "高専を卒業し、社会の闇に飲まれたOB";
        } else if (1500 <= HourMin && 1530 > HourMin) {
            document.getElementById("DJtime").innerHTML = "15:00-15:30";
            document.getElementById("DJ").innerHTML = "みどり";
            document.getElementById("icon").src = "../img/ryder.jpg";
            document.getElementById("comment").innerHTML = "95年栃木生まれのオタク。 おとぎ銃士 赤ずきんを見て田村ゆかりさんと出会いオタクとしてのキャリアをスタート。 15歳のときにUK Hardcoreと出会いDJを始める。後にUK Hardcore系のイベントで(なぜか)アニソンDJの世界と出会いアニクラに飛び込んだ。(自称)unsigned唯一の皆勤賞";
        } else if (1530 <= HourMin && 1620 > HourMin) {
            document.getElementById("DJtime").innerHTML = "15:30-16:20";
            document.getElementById("DJ").innerHTML = "ふぉん";
            document.getElementById("icon").src = "../img/fon.jpg";
            document.getElementById("comment").innerHTML = "栃木県大田原市出身、在住。オーディエンスをリスペクトしたソウルフルなプレイが信条。好きなアニメはたまこまーけっと、たまこラブストーリー。";
        } else if (1620 <= HourMin && 1650 > HourMin) {
            document.getElementById("DJtime").innerHTML = "16:20-16:50";
            document.getElementById("DJ").innerHTML = "ココイチ";
            document.getElementById("icon").src = "../img/koko1.jpg";
            document.getElementById("comment").innerHTML = "名前の通り、好きなカレー屋はゴーゴーカレーです。2日に誕生日なので皆さん祝ってください。";
        } else {
            document.getElementById("DJtime").innerHTML = "16:20-16:50";
            document.getElementById("DJ").innerHTML = "Unsigned2019";
            document.getElementById("icon").src = "../img/un_8th_icon.png";
            document.getElementById("comment").innerHTML = "1:00から開始です";
        }
    } else if (MonthDay == 1104) {
        if (1100 <= HourMin && 1130 > HourMin) {
            document.getElementById("DJtime").innerHTML = "11:00-11:30";
            document.getElementById("DJ").innerHTML = "マイシパ95";
            document.getElementById("icon").src = "../img/maishipa95.jpg";
            document.getElementById("comment").innerHTML = "Vaporwave界隈が大好きなマイシパ95（マインスイーパ95）と申します。今回DanceやDisco,80s,Futurefunkというテーマで曲を回したいと思います。バブリーでセクシーな世界感を是非感じて下さい！";
        } else if (1130 <= HourMin && 1200 > HourMin) {
            document.getElementById("DJtime").innerHTML = "11:30-12:00";
            document.getElementById("DJ").innerHTML = "TNB";
            document.getElementById("icon").src = "../img/TNB.jpg";
            document.getElementById("comment").innerHTML = "何を言おう…";
        } else if (1200 <= HourMin && 1230 > HourMin) {
            document.getElementById("DJtime").innerHTML = "12:00-12:30";
            document.getElementById("DJ").innerHTML = "焼き揉み";
            document.getElementById("icon").src = "../img/taiyaki.jpg";
            document.getElementById("comment").innerHTML = "頑張りたいです";
        } else if (1230 <= HourMin && 1300 > HourMin) {
            document.getElementById("DJtime").innerHTML = "12:30-13:00";
            document.getElementById("DJ").innerHTML = "kuma";
            document.getElementById("icon").src = "../img/kuma.jpg";
            document.getElementById("comment").innerHTML = "今年初参加です。ミス等ありますがよろしくお願いします！頑張っていきますよ〜ｲｸｲｸ";
        } else if (1300 <= HourMin && 1330 > HourMin) {
            document.getElementById("DJtime").innerHTML = "13:00-13:30";
            document.getElementById("DJ").innerHTML = "だっしー";
            document.getElementById("icon").src = "../img/dasshi.jpg";
            document.getElementById("comment").innerHTML = "まだまだ使いなれていませんが、精一杯やるのでよろしくお願いします。";
        } else if (1330 <= HourMin && 1400 > HourMin) {
            document.getElementById("DJtime").innerHTML = "13:30-14:00";
            document.getElementById("DJ").innerHTML = "Shine";
            document.getElementById("icon").src = "../img/shine.jpg";
            document.getElementById("comment").innerHTML = "もうとめたくない";
        } else if (1400 <= HourMin && 1430 > HourMin) {
            document.getElementById("DJtime").innerHTML = "14:00-14:30";
            document.getElementById("DJ").innerHTML = "二浪";
            document.getElementById("icon").src = "../img/2i6ou.jpg";
            document.getElementById("comment").innerHTML = "(淫夢要素は)ないです。24歳JKです。僕バイキンマン";
        } else if (1430 <= HourMin && 1500 > HourMin) {
            document.getElementById("DJtime").innerHTML = "14:30-15:00";
            document.getElementById("DJ").innerHTML = "Kushizam";
            document.getElementById("icon").src = "../img/kushizam.jpg";
            document.getElementById("comment").innerHTML = "20歳/男/音研OB";
        } else if (1500 <= HourMin && 1530 > HourMin) {
            document.getElementById("DJtime").innerHTML = "15:00-15:30";
            document.getElementById("DJ").innerHTML = "smith";
            document.getElementById("icon").src = "../img/smith.jpg";
            document.getElementById("comment").innerHTML = "半年で2回引っ越しした男は違うというところを見せつけようと思います";
        } else if (1530 <= HourMin && 1600 > HourMin) {
            document.getElementById("DJtime").innerHTML = "15:30-16:00";
            document.getElementById("DJ").innerHTML = "2g06";
            document.getElementById("icon").src = "../img/2g06.jpg";
            document.getElementById("comment").innerHTML = "老人です";
        } else if (1600 <= HourMin && 1630 > HourMin) {
            document.getElementById("DJtime").innerHTML = "16:00-16:30";
            document.getElementById("DJ").innerHTML = "Massu";
            document.getElementById("icon").src = "../img/massu.jpg";
            document.getElementById("comment").innerHTML = "Unsigned2年目です。鉄旅とUKHCとLEDが好き。yay! nice! cool!なDJをしたい";
        } else if (1630 <= HourMin && 1700 > HourMin) {
            document.getElementById("DJtime").innerHTML = "16:30-17:00";
            document.getElementById("DJ").innerHTML = "saboten";
            document.getElementById("icon").src = "../img/saboten.jpg";
            document.getElementById("comment").innerHTML = "音研の会長をしています。速い音楽が好きです";
        } else {

        }
    }
}
setInterval('showClock()', 1000);