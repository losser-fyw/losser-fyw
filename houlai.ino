#define D0 -1   //音符对应的相应频率
#define D1 523  //D表示D调
#define D2 587
#define D3 659
#define D4 698
#define D5 784
#define D6 880
#define D7 988

#define DL1 261 //DL表示D调LOW
#define DL2 294
#define DL3 329
#define DL4 349
#define DL5 392
#define DL6 440
#define DL7 493

#define DH1 1046//DH表示D调HIGH
#define DH2 1175
#define DH3 1318
#define DH4 1397
#define DH5 1568
#define DH6 1760
#define DH7 1976
#define Speed 600

#include <SoftwareSerial.h>
SoftwareSerial ESP_Serial(2,3);

int tunehoulai[] =     //以下为《后来》乐谱中音符部分，用tune整数序列表示
{
  D0,D3,D2,D1,D1,D1,D1,D2,D3,D4,D3,D3,D4,D2,D1,D2,DL7,DL7,D1,DL6,DL6,DL7,D1,D1,D2,
  D3,DL7,DL7,D1,DL7,DL6,DL6,D6,D5,D4,D3,D4,D5,DL7,D1,D4,D3,D4,D4,D4,D3,D2,D1,DL7,D2,D1,
};
float durationhoulai[]=  //以下为《后来》节拍部分，用浮点序列duration表示
{
  3,0.5,0.25,0.25,1.5,0.5,0.5,0.5,0.5,0.5,1.5,0.25,0.25,0.5,0.25,0.75,0.25,0.25,1.25,0.25,0.25,0.25,1,0.5,0.5,
  0.5,0.25,2.25,0.5,0.25,0.25,1.5,0.5,0.5,0.5,0.5,0.5,1.5,0.5,1.5,0.25,0.25,1.5,0.25,0.25,0.5,0.5,0.5,0.25,0.25,4,
};
int tunekanong[] =     //以下为《卡农》乐谱中音符部分，用tune整数序列表示
{
  DH5,DH3,DH4,DH5,DH3,DH4,DH5,D5,D6,D7,DH1,DH2,DH3,DH4,
  DH3,DH1,DH2,DH3,D3,D4,D5,D6,D5,D4,D5,D3,D4,D5,
  D4,D6,D5,D4,D3,D2,D3,D2,D1,D2,D3,D4,D5,D6,
  D4,D6,D5,D6,D7,DH1,D5,D6,D7,DH1,DH2,DH3,DH4,DH5,
//  DH3,DH1,DH2,DH3,DH2,DH1,DH2,D7,DH1,DH2,DH3,DH2,DH1,D7,
//  DH1,D6,D7,DH1,D1,D2,D3,D4,D3,D2,D3,DH1,D7,DH1,
//  D6,DH1,D7,D6,D5,D4,D5,D4,D3,D4,D5,D6,D7,D1,
//  D6,DH1,D7,DH1,D7,D6,D7,DH1,DH2,DH1,D7,DH1,D6,D7,
};
float durationkanong[]=  //以下为《卡农》节拍部分，用浮点序列duration表示
{
  0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,
  0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,
//  0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,
//  0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,
};
int tunetiankongzhicheng[]=     //以下为《天空之城》乐谱中音符部分，用tune整数序列表示
{
  D0,D6,D7,DH1,D7,DH1,DH3,D7,D3,D3,D6,D5,D6,DH1,D5,D3,D4,D3,D4,DH1,D3,D0,DH1,DH1,DH1,D7,(D4+D5)/2,(D4+D5)/2,D7,D7,D0,D6,D7,DH1,D7,DH1,DH3,D7,D3,D3,D6,D5,D6,DH1,
  D5,D2,D3,D4,DH1,D7,D7,DH1,DH1,DH2,DH2,DH3,DH1,DH1,DH1,D7,D6,D6,D7,(D5+D6)/2,D6,DH1,DH2,DH3,DH2,DH3,DH5,DH2,D5,D5,DH1,D7,DH1,DH3,DH3,
  D6,D7,DH1,D7,DH2,DH2,DH1,D5,D5,DH4,DH3,DH2,DH1,DH3,DH3,DH6,DH5,DH5,DH3,DH2,DH1,D0,DH1,DH2,DH1,DH2,DH2,DH5,DH3,DH3,DH6,DH5,DH3,DH2,DH1,D0,DH1,DH2,DH1,DH2,DH2,D7,D6,
};
float durationtiankongzhicheng[]=  //以下为《天空之城》节拍部分，用浮点序列duration表示
{
  3,0.5,0.5,1.5,0.5,1,1,3,0.5,0.5,1.5,0.5,1,1,3,1,1.5,0.5,1,1,2,0.5,0.5,0.5,0.5,1.5,0.5,1,1,2,1,0.5,0.5,1.5,0.5,1,1,3,0.5,0.5,1.5,0.5,1,1,
  3,0.5,0.5,1,0.5,0.5,0.5,0.5,1,0.5,0.5,0.5,0.5,2,0.5,0.5,0.5,0.5,1,1,3,0.5,0.5,1.5,0.5,1,1,3,0.5,0.5,1.5,0.5,1,1,4,
  0.5,0.5,1,1,0.5,0.5,1.5,0.5,2,1,1,1,1,3,1,2,1,1,0.5,0.5,2,0.5,0.5,1,0.5,0.5,1,1,3,1,2,2,0.5,0.5,2,0.5,0.5,1,0.5,0.5,1,1,3,
};
int lengthhoulai;//这里定义一个变量，后面用来表示共有多少个音符
int lengthkanong;
int lengthtiankongzhicheng;
int tonePin=5;//蜂鸣器的pin
int stream1; //控制蜂鸣器

void setup()
{
  Serial.begin(9600);  //定义串口波特率
  ESP_Serial.begin(115200);  //定义软串口波特率
  pinMode(tonePin,OUTPUT);//设置蜂鸣器的pin为输出模式
  lengthhoulai = sizeof(tunehoulai)/sizeof(tunehoulai[0]);//这里用了一个sizeof函数，可以查出tone序列里有多少个音符
  lengthkanong = sizeof(tunekanong)/sizeof(tunekanong[0]);
  lengthtiankongzhicheng = sizeof(tunetiankongzhicheng)/sizeof(tunetiankongzhicheng[0]);
}

void loop()
{
  stream1 = ESP_Serial.parseInt();
  Serial.println(stream1);
  if(stream1==1)
  {
    for(int x=0;x<lengthhoulai && stream1 != 2 && stream1 != 3 &&stream1!=4; x++)//循环音符的次数
    {      

        if(x%8==0)
        {stream1 = ESP_Serial.parseInt();}
        Serial.println(stream1);
        tone(tonePin,tunehoulai[x]);//此函数依次播放tune序列里的数组，即每个音符
        delay(Speed*durationhoulai[x]);//每个音符持续的时间，即节拍duration，调整时间越大，曲子速度越慢；越小曲子速度越快
        noTone(tonePin);//停止当前音符，进入下一音符
    }
  }
  if(stream1==2)
  {
    for(int x=0;x<lengthkanong && stream1 != 1 && stream1 != 3&&stream1!=4; x++)//循环音符的次数
    {   
        if(x%16==0)
        {stream1 = ESP_Serial.parseInt();}
        Serial.println(stream1);
        tone(tonePin,tunekanong[x]);//此函数依次播放tune序列里的数组，即每个音符
        delay(Speed*durationkanong[x]);//每个音符持续的时间，即节拍duration，调整时间越大，曲子速度越慢；越小曲子速度越快
        noTone(tonePin);//停止当前音符，进入下一音符
    }
  }
  if(stream1==3)
  {
    for(int x=0;x<lengthtiankongzhicheng && stream1 != 1 && stream1 != 2&&stream1!=4; x++)//循环音符的次数
    {   
      
        Serial.println(stream1);
        tone(tonePin,tunetiankongzhicheng[x]);//此函数依次播放tune序列里的数组，即每个音符
        if(x%4==0)
        {stream1 = ESP_Serial.parseInt();}
        delay(Speed*durationtiankongzhicheng[x]);//每个音符持续的时间，即节拍duration，调整时间越大，曲子速度越慢；越小曲子速度越快
        noTone(tonePin);//停止当前音符，进入下一音符
    }
  }
}
