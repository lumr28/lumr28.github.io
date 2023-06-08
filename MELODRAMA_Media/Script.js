function Movie_OnKeyPress(Key){
StackTrace="Al Pulsar Tecla";
// Key== asociación de tecla teclado a movimiento
//var seq1;

if(Key==39) {
	seq1.X = seq1.X + 10; //derecha

}

if(Key==37) {
	seq1.X = seq1.X - 10; //izquierda

}

if(Key==38) {
	seq1.Y = seq1.Y - 80; //izquierda
}

if(Key==40) {
	seq1.Y = seq1.Y + 80; //derecha
}

if (seq1.X > 800) {
	GotoAndPlay(20);
seq1.X =10;
}

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
PlayLoop(8,30);


}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
SoundPlay("2v",false);


}

function Frame__2_0(ID){
StackTrace="Escena 3 Fotograma 0";
Stop();


}

function Frame__2_1(ID){
StackTrace="Escena 3 Fotograma 1";
SoundPlay("writer",true);
SoundSetVolume("writer",85);


}

function Frame__2_2(ID){
StackTrace="Escena 3 Fotograma 2";
PlayLoop(33,100);


}

function Frame__3_0(ID){
StackTrace="Escena 4 Fotograma 0";
Pause();

}

function Frame__4_0(ID){
StackTrace="Escena 5 Fotograma 0";

ImageSequencePlay("seq1");// aparición personaje en pantalla
seq1.X = -60; 
seq1.Y = 473;
Pause();


}

function Frame__4_1(ID){
StackTrace="Escena 5 Fotograma 1";
Stop();




}

function Frame__5_0(ID){
StackTrace="Escena 6 Fotograma 0";
Pause();

}

function Frame__6_0(ID){
StackTrace="Escena 7 Fotograma 0";

GotoAndPlay(51);



}

function Frame__6_1(ID){
StackTrace="Escena 7 Fotograma 1";
Pause();

}

function Frame__6_2(ID){
StackTrace="Escena 7 Fotograma 2";
Stop();

}

function Frame__6_3(ID){
StackTrace="Escena 7 Fotograma 3";
Stop();

}

function Frame__6_4(ID){
StackTrace="Escena 7 Fotograma 4";
Stop();

}

function Frame__6_5(ID){
StackTrace="Escena 7 Fotograma 5";
Stop();
GotoSceneNameAndPlay("expl_piano",0);


}

function Frame__6_6(ID){
StackTrace="Escena 7 Fotograma 6";
Stop();

}

function Frame__6_7(ID){
StackTrace="Escena 7 Fotograma 7";
Stop();

}

function Frame__6_8(ID){
StackTrace="Escena 7 Fotograma 8";
Stop();

}

function Frame__6_9(ID){
StackTrace="Escena 7 Fotograma 9";
Stop();

}

function Frame__6_10(ID){
StackTrace="Escena 7 Fotograma 10";
GotoSceneNameAndPlay("expl_piano",0);


}

function Frame__6_11(ID){
StackTrace="Escena 7 Fotograma 11";
Stop();

}

function Frame__7_0(ID){
StackTrace="Escena 8 Fotograma 0";
TextBoxSet("n","NIVEL 1");
ImageSequenceSetIndex("seqN",1);

teclas = 0;
codigo="";

ImageSequenceSetIndex("seqN",1);


}

function Frame__7_1(ID){
StackTrace="Escena 8 Fotograma 1";
TextBoxSet("tn1",codigo );
if (teclas < teclas_codigo1) { // no se han introducido todas las notas

GotoAndPlay(2);

}

else { // COMPROBAR 

if (codigo=="RFsL") {
//alert("si");
GotoSceneName("tr_piano_1");
}
else { // error , comenzar de nuevo
SoundPlay("error",false);
GotoAndPlay(0); 
}


} 



}

function Frame__8_0(ID){
StackTrace="Escena 9 Fotograma 0";
TextBoxSet("n2","NIVEL 2");
teclas = 0;
codigo="";
//seqN= seqN2;
ImageSequenceSetIndex("seqN2",1);


}

function Frame__8_1(ID){
StackTrace="Escena 9 Fotograma 1";
// alert(codigo);

TextBoxSet("t",codigo);
if (teclas < teclas_codigo2) {

	GotoAndPlay(2);

}
else{ 

	if (codigo=="sLSsML") {
	// alert("siii");   
	GotoSceneName("tr_piano_2");
	} 
	else {
	SoundPlay("error",false);
	GotoAndPlay(0);
	}

}

}

function Frame__9_0(ID){
StackTrace="Escena 10 Fotograma 0";
TextBoxSet("n3","NIVEL 3");
//seqN= seqN3;

teclas = 0;
codigo="";
ImageSequenceSetIndex("seqN3",1);


}

function Frame__9_1(ID){
StackTrace="Escena 10 Fotograma 1";
//Stop();
TextBoxSet("t", codigo);
if (teclas < teclas_codigo3) { 

	GotoAndPlay(2);

}

else {

	if (codigo=="LSsMLsLS") {
		GotoSceneName("final_piano");
	//alert("si");
	} 
	else {
	SoundPlay("error",false);
	GotoAndPlay(0);
	}

}


}

function Frame__10_0(ID){
StackTrace="Escena 11 Fotograma 0";
SoundPlay("gre_light",true);
SoundSetVolume("gre_light",85);


}

function Frame__10_1(ID){
StackTrace="Escena 11 Fotograma 1";
Pause();

}

function Frame__10_2(ID){
StackTrace="Escena 11 Fotograma 2";
Pause();

}

function Frame__10_3(ID){
StackTrace="Escena 11 Fotograma 3";
Pause();

}

function Frame__10_4(ID){
StackTrace="Escena 11 Fotograma 4";
Pause();

}

function Frame__10_5(ID){
StackTrace="Escena 11 Fotograma 5";
Pause();


}

function Frame__10_6(ID){
StackTrace="Escena 11 Fotograma 6";
Pause();

}

function Frame__10_7(ID){
StackTrace="Escena 11 Fotograma 7";
Pause();



}

function Frame__10_8(ID){
StackTrace="Escena 11 Fotograma 8";
Pause();



}

function Frame__10_9(ID){
StackTrace="Escena 11 Fotograma 9";
Pause();



}

function Frame__10_10(ID){
StackTrace="Escena 11 Fotograma 10";
Pause();



}

function Frame__10_11(ID){
StackTrace="Escena 11 Fotograma 11";
Pause();



}

function Frame__10_12(ID){
StackTrace="Escena 11 Fotograma 12";
Pause();

}

function Frame__10_13(ID){
StackTrace="Escena 11 Fotograma 13";
Pause();

}

function Frame__11_0(ID){
StackTrace="Escena 12 Fotograma 0";
SoundPause("louvre_piano");
SoundPlay("sober ii creditos",false);


}

function Frame__11_1(ID){
StackTrace="Escena 12 Fotograma 1";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("sober ii creditos");


}

function Frame__12_1(ID){
StackTrace="Escena 13 Fotograma 1";
Stop();

}

function Frame__13_1(ID){
StackTrace="Escena 14 Fotograma 1";
Stop();

}

function Frame__14_0(ID){
StackTrace="Escena 15 Fotograma 0";
SoundPlay("loveless",true);


}

function Frame__14_1(ID){
StackTrace="Escena 15 Fotograma 1";
Stop();

}

function Frame__15_0(ID){
StackTrace="Escena 16 Fotograma 0";
GotoSceneNameAndPlay("Nivel 2",0);


}

function Frame__16_0(ID){
StackTrace="Escena 17 Fotograma 0";
GotoSceneNameAndPlay("nivel_3",0);


}

function Frame__17_0(ID){
StackTrace="Escena 18 Fotograma 0";
Pause();

}

function Frame__18_0(ID){
StackTrace="Escena 19 Fotograma 0";
Pause();

}

function Frame__19_0(ID){
StackTrace="Escena 20 Fotograma 0";
Pause();

}

function Frame__20_0(ID){
StackTrace="Escena 21 Fotograma 0";
Pause();

}

function Frame__21_0(ID){
StackTrace="Escena 22 Fotograma 0";
GotoSceneNameAndPlay("créditos",0);

}

function melo_OnClick(){
StackTrace="melo.Al Hacer Clic";
GotoSceneNameAndPlay("TEASER",0);
SoundPlay("2v",false);

}

function HotSpot5_OnClick(){
StackTrace="HotSpot5.Al Hacer Clic";
SceneNext();

}

function sig_escena_teaser_OnClick(){
StackTrace="sig_escena_teaser.Al Hacer Clic";
SceneNext();
SoundStop("lorde_teaser");

}

function encenderluz_OnClick(){
StackTrace="encender luz.Al Hacer Clic";
Resume();

}

function play_OnClick(){
StackTrace="play.Al Hacer Clic";
GotoSceneNameAndPlay("intro 1",0);
SoundStop("writer");
}

function galería_OnOver(){
StackTrace="galería.Al Pasar";
TimelineGotoAndPlay("G1",0);

}

function galería_OnClick(){
StackTrace="galería .Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);
SoundStop("writer");
}

function HotSpot1_OnOver(){
StackTrace="HotSpot1.Al Pasar";
TimelineGotoAndPlay("ELA",0);
}

function botonelalbum_OnClick(){
StackTrace="boton el album.Al Hacer Clic";
GotoSceneNameAndPlay("elalbum",0);
SoundStop("writer");
}

function HotSpot3_OnOver(){
StackTrace="HotSpot3.Al Pasar";
TimelineGotoAndPlay("CRED",0);
}

function botoncreditos_OnClick(){
StackTrace="boton creditos.Al Hacer Clic";
GotoSceneNameAndPlay("créditos",0);
SoundStop("writer");

}

function HotSpot4_OnClick(){
StackTrace="HotSpot4.Al Hacer Clic";
TimelineGotoAndPlay("NIV",0);
}

function niveles_OnClick(){
StackTrace="niveles.Al Hacer Clic";
GotoSceneNameAndPlay("galeria niveles",0);
SoundStop("writer");
}

function volvermenucred_OnClick(){
StackTrace="volver menu cred.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("sober ii creditos");

}

function Button8_OnClick(){
StackTrace="Button8.Al Hacer Clic";
GotoSceneNameAndPlay("juego_mario",0);


}

function Button10_OnClick(){
StackTrace="Button10.Al Hacer Clic";
GotoSceneNameAndPlay("intro 2",0);

}

function Button9_OnClick(){
StackTrace="Button9.Al Hacer Clic";
GotoSceneNameAndPlay("movil",0);

}

function volvermenucred_OnClick(){
StackTrace="volver menu cred.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("sober ii creditos");

}

function b102_OnClick(){
StackTrace="b102.Al Hacer Clic";
GotoAndPlay(1);
}

function b11_OnClick(){
StackTrace="b 11.Al Hacer Clic";
GotoAndPlay(85);

}

function b13_OnClick(){
StackTrace="b13.Al Hacer Clic";
GotoAndPlay(95);
}

function b14_OnClick(){
StackTrace="b14.Al Hacer Clic";
GotoAndPlay(15);
}

function b15_OnClick(){
StackTrace="b15.Al Hacer Clic";
GotoAndPlay(110);
}

function b16_OnClick(){
StackTrace="b16.Al Hacer Clic";
GotoAndPlay(20);
}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
GotoAndPlay();
}

function Button4_OnClick(){
StackTrace="Button4.Al Hacer Clic";
GotoAndPlay(7);
}

function b11_OnClick(){
StackTrace="b 11.Al Hacer Clic";
GotoAndPlay(85);

}

function b18_OnClick(){
StackTrace="b18.Al Hacer Clic";
GotoAndPlay(25);
}

function b17_OnClick(){
StackTrace="b17.Al Hacer Clic";
GotoAndPlay(120);
}

function b14_OnClick(){
StackTrace="b14.Al Hacer Clic";
GotoAndPlay(15);
}

function b16_OnClick(){
StackTrace="b16.Al Hacer Clic";
GotoAndPlay(20);
}

function b15_OnClick(){
StackTrace="b15.Al Hacer Clic";
GotoAndPlay(110);
}

function b18_OnClick(){
StackTrace="b18.Al Hacer Clic";
GotoAndPlay(25);
}

function b17_OnClick(){
StackTrace="b17.Al Hacer Clic";
GotoAndPlay(120);
}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
GotoAndPlay();
}

function Button4_OnClick(){
StackTrace="Button4.Al Hacer Clic";
GotoAndPlay(7);
}

function b14_OnClick(){
StackTrace="b14.Al Hacer Clic";
GotoAndPlay(15);
}

function b13_OnClick(){
StackTrace="b13.Al Hacer Clic";
GotoAndPlay(95);
}

function pist_1_OnClick(){
StackTrace="pist_1.Al Hacer Clic";
GotoSceneNameAndPlay("pist_1",0);

}

function do_OnClick(){
StackTrace="do.Al Hacer Clic";
SoundPlay("nota_do",false);
SoundSetVolume("nota_do",90);
codigo=codigo+"D";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"D";
//codigo2=codigo2+"D";


}

function re_OnClick(){
StackTrace="re.Al Hacer Clic";
SoundPlay("nota_re",false);
SoundSetVolume("nota_re",90);
codigo=codigo+"R";
teclas = teclas + 1; 

ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"R";
//codigo2=codigo2+"R";

}

function mi_OnClick(){
StackTrace="mi.Al Hacer Clic";
SoundPlay("nota_mi",false);
SoundSetVolume("nota_mi",90);
codigo=codigo+"M";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"M";
//codigo2=codigo2+"M";
}

function fa_OnClick(){
StackTrace="fa.Al Hacer Clic";
SoundPlay("nota_fa",false);
SoundSetVolume("nota_fa",90);
codigo=codigo+"F";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");

//codigo1=codigo1+"F";
//codigo2=codigo2+"F";

}

function sol_OnClick(){
StackTrace="sol.Al Hacer Clic";
SoundPlay("nota_sol",false);
SoundSetVolume("nota_sol",90);
codigo=codigo+"S";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"S";
//codigo2=codigo2+"S";
}

function la_OnClick(){
StackTrace="la.Al Hacer Clic";
SoundPlay("nota_la",false);
SoundSetVolume("nota_la",90);
codigo=codigo+"L";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"L";
//codigo2=codigo2+"L";
}

function si_OnClick(){
StackTrace="si.Al Hacer Clic";
SoundPlay("nota_si",false);
SoundSetVolume("nota_si",90);
codigo=codigo+"s";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"s";
//codigo2=codigo2+"s";
}

function genera_do_OnClick(){
StackTrace="genera_do.Al Hacer Clic";
SoundPlay("nivel_1",false);
SoundSetVolume("nivel_1",90);


}

function rehacer_OnClick(){
StackTrace="rehacer.Al Hacer Clic";
GotoAndPlay(0);

}

function do_OnClick(){
StackTrace="do.Al Hacer Clic";
SoundPlay("nota_do",false);
SoundSetVolume("nota_do",90);
codigo=codigo+"D";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"D";
//codigo2=codigo2+"D";


}

function re_OnClick(){
StackTrace="re.Al Hacer Clic";
SoundPlay("nota_re",false);
SoundSetVolume("nota_re",90);
codigo=codigo+"R";
teclas = teclas + 1; 

ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"R";
//codigo2=codigo2+"R";

}

function mi_OnClick(){
StackTrace="mi.Al Hacer Clic";
SoundPlay("nota_mi",false);
SoundSetVolume("nota_mi",90);
codigo=codigo+"M";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"M";
//codigo2=codigo2+"M";
}

function fa_OnClick(){
StackTrace="fa.Al Hacer Clic";
SoundPlay("nota_fa",false);
SoundSetVolume("nota_fa",90);
codigo=codigo+"F";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");

//codigo1=codigo1+"F";
//codigo2=codigo2+"F";

}

function sol_OnClick(){
StackTrace="sol.Al Hacer Clic";
SoundPlay("nota_sol",false);
SoundSetVolume("nota_sol",90);
codigo=codigo+"S";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"S";
//codigo2=codigo2+"S";
}

function la_OnClick(){
StackTrace="la.Al Hacer Clic";
SoundPlay("nota_la",false);
SoundSetVolume("nota_la",90);
codigo=codigo+"L";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"L";
//codigo2=codigo2+"L";
}

function si_OnClick(){
StackTrace="si.Al Hacer Clic";
SoundPlay("nota_si",false);
SoundSetVolume("nota_si",90);
codigo=codigo+"s";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"s";
//codigo2=codigo2+"s";
}

function genera_2_OnClick(){
StackTrace="genera_2.Al Hacer Clic";
SoundPlay("nivel_2",false);
SoundSetVolume("nivel_2",90);


}

function pist_2_OnClick(){
StackTrace="pist_2.Al Hacer Clic";
GotoSceneNameAndPlay("pist_2",0);
}

function rehacer_OnClick(){
StackTrace="rehacer.Al Hacer Clic";
GotoAndPlay(0);

}

function genera_3_OnClick(){
StackTrace="genera_3.Al Hacer Clic";
SoundPlay("nivel_3",false);
SoundSetVolume("nivel_3",90);



}

function pist_3_OnClick(){
StackTrace="pist_3.Al Hacer Clic";
GotoSceneNameAndPlay("pist_3",0);
}

function rehacer_OnClick(){
StackTrace="rehacer.Al Hacer Clic";
GotoAndPlay(0);

}

function do_OnClick(){
StackTrace="do.Al Hacer Clic";
SoundPlay("nota_do",false);
SoundSetVolume("nota_do",90);
codigo=codigo+"D";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"D";
//codigo2=codigo2+"D";


}

function re_OnClick(){
StackTrace="re.Al Hacer Clic";
SoundPlay("nota_re",false);
SoundSetVolume("nota_re",90);
codigo=codigo+"R";
teclas = teclas + 1; 

ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"R";
//codigo2=codigo2+"R";

}

function mi_OnClick(){
StackTrace="mi.Al Hacer Clic";
SoundPlay("nota_mi",false);
SoundSetVolume("nota_mi",90);
codigo=codigo+"M";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"M";
//codigo2=codigo2+"M";
}

function fa_OnClick(){
StackTrace="fa.Al Hacer Clic";
SoundPlay("nota_fa",false);
SoundSetVolume("nota_fa",90);
codigo=codigo+"F";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");

//codigo1=codigo1+"F";
//codigo2=codigo2+"F";

}

function sol_OnClick(){
StackTrace="sol.Al Hacer Clic";
SoundPlay("nota_sol",false);
SoundSetVolume("nota_sol",90);
codigo=codigo+"S";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"S";
//codigo2=codigo2+"S";
}

function la_OnClick(){
StackTrace="la.Al Hacer Clic";
SoundPlay("nota_la",false);
SoundSetVolume("nota_la",90);
codigo=codigo+"L";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"L";
//codigo2=codigo2+"L";
}

function si_OnClick(){
StackTrace="si.Al Hacer Clic";
SoundPlay("nota_si",false);
SoundSetVolume("nota_si",90);
codigo=codigo+"s";
teclas = teclas + 1; 
ImageSequenceNext("seqN");
ImageSequenceNext("seqN2");
ImageSequenceNext("seqN3");
//codigo1=codigo1+"s";
//codigo2=codigo2+"s";
}

function volvermenu_OnClick(){
StackTrace="volver menu.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("gre_light");

}

function Button1_OnClick(){
StackTrace="Button1.Al Hacer Clic";
GotoAndPlay(40);

}

function figura1_OnClick(){
StackTrace="figura 1.Al Hacer Clic";
//GotoSceneNameAndPlay("ima 1",0);
GotoAndPlay(6);

}

function Button2_OnClick(){
StackTrace="Button2.Al Hacer Clic";
GotoAndPlay(20);
}

function Button3_OnClick(){
StackTrace="Button3.Al Hacer Clic";
GotoAndPlay(30);
}

function ID5_OnClick(){
StackTrace="5.Al Hacer Clic";
GotoAndPlay(50);

}

function bf2_OnClick(){
StackTrace="bf2.Al Hacer Clic";
GotoAndPlay(60);
}

function bf3_OnClick(){
StackTrace="bf3.Al Hacer Clic";
GotoAndPlay(70);
}

function bf4_OnClick(){
StackTrace="bf4.Al Hacer Clic";
GotoAndPlay(80);
}

function bf5_OnClick(){
StackTrace="bf5.Al Hacer Clic";
GotoAndPlay(90);
}

function bf6_OnClick(){
StackTrace="bf6.Al Hacer Clic";
GotoAndPlay(50);
}

function bf7_OnClick(){
StackTrace="bf7.Al Hacer Clic";
GotoAndPlay(90);
}

function bf1_OnClick(){
StackTrace="bf1.Al Hacer Clic";
GotoAndPlay(50);
}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b_g_i_1_OnClick(){
StackTrace="b_g_i_1.Al Hacer Clic";
GotoAndPlay(100);
}

function b_g_i_1_ade_OnClick(){
StackTrace="b_g_i_1_ade.Al Hacer Clic";
GotoAndPlay(20);

}

function figura1_OnClick(){
StackTrace="figura 1.Al Hacer Clic";
//GotoSceneNameAndPlay("ima 1",0);
GotoAndPlay(6);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b_g_i_2_ade_OnClick(){
StackTrace="b_g_i_2_ade.Al Hacer Clic";
GotoAndPlay(30);
}

function b_g_i_2_OnClick(){
StackTrace="b_g_i_2.Al Hacer Clic";
GotoAndPlay(10);
}

function Button2_OnClick(){
StackTrace="Button2.Al Hacer Clic";
GotoAndPlay(20);
}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b_g_i_3_OnClick(){
StackTrace="b_g_i_3.Al Hacer Clic";
GotoAndPlay(20);
}

function b_g_i_3_ade_OnClick(){
StackTrace="b_g_i_3_ade.Al Hacer Clic";
GotoAndPlay(40);
}

function Button3_OnClick(){
StackTrace="Button3.Al Hacer Clic";
GotoAndPlay(30);
}

function b_g_i_4_ade_OnClick(){
StackTrace="b_g_i_4_ade.Al Hacer Clic";
GotoAndPlay(50);
}

function b_g_i_4_OnClick(){
StackTrace="b_g_i_4.Al Hacer Clic";
GotoAndPlay(30);
}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function ID5_OnClick(){
StackTrace="5.Al Hacer Clic";
GotoAndPlay(50);

}

function b_g_i_5_OnClick(){
StackTrace="b_g_i_5.Al Hacer Clic";
GotoAndPlay(40);

}

function b_g_i_5_ade_OnClick(){
StackTrace="b_g_i_5_ade.Al Hacer Clic";
GotoAndPlay(60);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b6_OnClick(){
StackTrace="b6.Al Hacer Clic";
GotoAndPlay(70);

}

function b6a_OnClick(){
StackTrace="b6a.Al Hacer Clic";
GotoAndPlay(50);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b7a_OnClick(){
StackTrace="b7a.Al Hacer Clic";
GotoAndPlay(60);

}

function b7_OnClick(){
StackTrace="b7.Al Hacer Clic";
GotoAndPlay(80);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b10a_OnClick(){
StackTrace="b10a.Al Hacer Clic";
GotoAndPlay(70);

}

function b10_OnClick(){
StackTrace="b10.Al Hacer Clic";
GotoAndPlay(110);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b8a_OnClick(){
StackTrace="b8a.Al Hacer Clic";
GotoAndPlay(120);

}

function b8_OnClick(){
StackTrace="b8.Al Hacer Clic";
GotoAndPlay(100);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function b9a_OnClick(){
StackTrace="b9a.Al Hacer Clic";
GotoAndPlay(90);

}

function b9_OnClick(){
StackTrace="b9.Al Hacer Clic";
GotoAndPlay(10);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function bf5_OnClick(){
StackTrace="bf5.Al Hacer Clic";
GotoAndPlay(90);
}

function b11a_OnClick(){
StackTrace="b11a.Al Hacer Clic";
GotoAndPlay(80);

}

function b11_OnClick(){
StackTrace="b11.Al Hacer Clic";
GotoAndPlay(120);

}

function volveragaleriaimagenes_OnClick(){
StackTrace="volver a galeria imagenes.Al Hacer Clic";
GotoSceneNameAndPlay("galeria de imagenes",0);

}

function bf6_OnClick(){
StackTrace="bf6.Al Hacer Clic";
GotoAndPlay(50);
}

function b12a_OnClick(){
StackTrace="b12a.Al Hacer Clic";
GotoAndPlay(110);

}

function b12_OnClick(){
StackTrace="b12.Al Hacer Clic";
GotoAndPlay(90);

}

function volvermenucred_OnClick(){
StackTrace="volver menu cred.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("sober ii creditos");

}

function go_nivel1_OnClick(){
StackTrace="go_nivel1.Al Hacer Clic";
GotoSceneNameAndPlay("Nivel 1",0);

}

function volvermenu_OnClick(){
StackTrace="volver menu.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("gre_light");

}

function volvermenu_OnClick(){
StackTrace="volver menu.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("gre_light");

}

function Button11_OnClick(){
StackTrace="Button11.Al Hacer Clic";
GotoSceneNameAndPlay("fin",0);

}

function InputSlider1_OnChange(Value){
StackTrace="InputSlider1.Al Cambiar";
SoundSetVolume("loveless",Value);



}

function volvermenu_elalbum_OnClick(){
StackTrace="volver menu_elalbum.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("loveless");


}

function volvermenu_OnClick(){
StackTrace="volver menu.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("gre_light");

}

function volvermenu_OnClick(){
StackTrace="volver menu.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("gre_light");

}

function volvermenu_OnClick(){
StackTrace="volver menu.Al Hacer Clic";
GotoSceneNameAndPlay("MENÚ",0);
SoundStop("gre_light");

}

function Button12_OnClick(){
StackTrace="Button12.Al Hacer Clic";
GotoSceneNameAndPlay("intro 1",0);

}

function Button13_OnClick(){
StackTrace="Button13.Al Hacer Clic";
GotoSceneNameAndPlay("expl_piano",0);

}

function Button14_OnClick(){
StackTrace="Button14.Al Hacer Clic";
GotoSceneNameAndPlay("intro 2",0);

}

function volvern1_OnClick(){
StackTrace="volver n1.Al Hacer Clic";
GotoSceneNameAndPlay("Nivel 1",0);
}

function volvern2_OnClick(){
StackTrace="volver n2.Al Hacer Clic";
GotoSceneNameAndPlay("Nivel 2",0);
}

function volvern3_OnClick(){
StackTrace="volver n3.Al Hacer Clic";
GotoSceneNameAndPlay("nivel_3",0);
}


StackTrace="General";
//nivel 1 simon dice piano

var codigo="";

var teclas =0; // pulsaciones teclas para cada codigo
var teclas_codigo1= 4; // numero de teclas
var teclas_codigo2= 6; 
var teclas_codigo3= 8;