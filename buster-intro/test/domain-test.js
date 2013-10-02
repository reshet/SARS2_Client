var buster = require("buster");
var http = require('http');
//var $ = require("jquery");
var domain = require("../src/domain/MainClasses.js");
//var assertions = require("buster-assertions");
var assert = buster.referee.assert;

buster.testCase("Test domain",
    /*  {
     setUp: function() {
     this.timeout = 250; // 1000 ms ~ 1 s
     }
     },*/
    {
        setUp: function() {
            this.timeout = 250; // 1000 ms ~ 1 s
            //this.reference_anket = "[{"text":"Альтернатива 1","id":"1"},{"text":"Альтернатива 2","id":"2"}],"vartype":"defined"},"Q3_1":{"question":""},"Q3_2":{"question":""},"Q4":{"question":"Q4. Множественныйвыборс несовместимой альтернативой","alternatives":[{"text":"Альт 1","id":"1"},{"text":"Альт 2","id":"2"},{"text":"Несовместимая альт","id":"3"}],"vartype":"defined"},"Q4_1":{"question":""},"Q4_2":{"question":""},"Q4_3":{"question":""},"Q5":{"question":"Q5. Открытый вопрос текстовый"},"Q6":{"question":"Q6. Открытый вопрос целочисленный","vartype":"int"},"Q7":{"question":"Q7. Открытый дробный","vartype":"double"},"Q8":{"question":"Q8. Открытый дата время","vartype":"date"}},"LOGIC":{"test":[{"#":{"Q1":[{"#":{"E":[{"#":null,"@":{"ID":"1","TEXT":"Альтернатива 1<br\/> <br\/>"}},{"#":null,"@":{"ID":"2","TEXT":"Альтернатива 2"}}]},"@":{"ALG":"tile:\/\/sars_int\/q\/s.m","QUESTION":"Q1. Закрытый вопрос с единичным выбором","NEXT_ID":"Q2"}}],"Q2":[{"#":{"E":[{"#":null,"@":{"ID":"1","TEXT":"Альтернатива 1<br\/>"}},{"#":null,"@":{"ID":"2","TEXT":"Альтернатива 2<br\/>"}},{"#":null,"@":{"ID":"90","TEXT":"Другое","OTHER":"True"}}]},"@":{"ALG":"tile:\/\/sars_int\/q\/s.m","QUESTION":"Q2. Закрытый вопрос с единичным выбором и другим","ANOTHER_TF":"True","NEXT_ID":"Q3"}}],"Q3":[{"#":{"E":[{"#":null,"@":{"ID":"1","TEXT":"Альтернатива 1"}},{"#":null,"@":{"ID":"2","TEXT":"Альтернатива 2"}}]},"@":{"ALG":"tile:\/\/sars_int\/q\/m.m","QUESTION":"Q3. Множественный выбор","NEXT_ID":"Q4"}}],"Q4":[{"#":{"E":[{"#":null,"@":{"ID":"1","TEXT":"Альт 1"}},{"#":null,"@":{"ID":"2","TEXT":"Альт 2"}},{"#":null,"@":{"ID":"3","TEXT":"Несовместимая альт","INCOMPATIBLE":"False"}}]},"@":{"ALG":"tile:\/\/sars_int\/q\/m.m","QUESTION":"Q4. Множественныйвыборс несовместимой альтернативой","NEXT_ID":"Q5"}}],"Q5":[{"#":null,"@":{"ALG":"tile:\/\/sars_int\/q\/o.m","QUESTION":"Q5. Открытый вопрос текстовый","ANOTHER_TF":"True","NEXT_ID":"Q6"}}],"Q6":[{"#":null,"@":{"ALG":"tile:\/\/sars_int\/q\/o.m","QUESTION":"Q6. Открытый вопрос целочисленный","ANOTHER_TF":"True","NUMERIC":"int","NEXT_ID":"Q7"}}],"Q7":[{"#":null,"@":{"ALG":"tile:\/\/sars_int\/q\/o.m","QUESTION":"Q7. Открытый дробный","ANOTHER_TF":"True","NUMERIC":"double","NEXT_ID":"Q8"}}],"Q8":[{"#":null,"@":{"ALG":"tile:\/\/sars_int\/q\/o.m","QUESTION":"Q8. Открытый дата время","ANOTHER_TF":"True","NUMERIC":"date","NEXT_ID":"INT_HALT"}}],"INT_HALT":[{"#":null,"@":{"ALG":"tile:\/\/sys_m_ts\/q\/g.m","WDG":"tile:\/\/sys_m_ts\/q\/w.w","IMAGE":"mlsp:\/\/scale-img\/base\/inforq","IS_LAST":"1","CAPTION":"Завершення","SUBCAPTION":"Ви відповіли на всі питання інтерв'ю","INFO_TEXT":"Ви маєте змогу виправити введені відповіді, повернувшись назад та внісши відповідні правки. <br\/> Для завершення, натисніть 'Далі'"}}],"ACTIVE_DISPLAY_LIST":[{"#":{"E":[{"#":null,"@":{"CAPTION":"","NAME":""}}]},"@":[]}],"ANKETA_LEVEL_LIST":[{"#":{"E":[{"#":null,"@":{"INTERVIEW":"","ANKETA":""}}]},"@":[]}],"SYSTEM_LEVEL_LIST":[{"#":{"E":[{"#":null,"@":{"INTERVIEW":"","SYSTEM":""}}]},"@":[]}]},"@":{"ALG":"tile:\/\/sars_int\/at.m","UID":"582","NAME":"САРС-2-Пример"}}]}}"
        },
        "single choice structure": function(){
           var single = new domain.single("Q1","My question",[],false);
            assert.equals(single.getId(),"Q1");
            assert.equals(single.getText(),"My question");
            assert.equals(single.getAlternatives(),[]);
            assert.equals(single.getWithAnother(),false);

            //assert(adapter_setup.play());
        }

    }
);
