package in.ongrid.quizPortal.GenerateToken;

import java.time.LocalDateTime;
import java.util.Random;

public class TokenGenerate {
        // We are generating a token of type string.
            public  String GenerateString(){

                Random random=new Random();
                String data="";
                for(int i=0;i<20;i++)
                    data=data+(char)(random.nextInt(26)+97)+(String.valueOf(random.nextInt(100)));


                return data;
            }

}
