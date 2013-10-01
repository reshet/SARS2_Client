<?php
    //$anket = "PHRlc3QgICAgIEFMRz0idGlsZTovL3NhcnNfaW50L2F0Lm0iIFVJRD0iMSIgTkFNRT0i0KHQkNCg0KEtMi3Qn9GA0LjQvNC10YAiPg0KPFExIEFMRz0idGlsZTovL3NhcnNfaW50L3Evcy5tIiBRVUVTVElPTj0iUTEuINCX0LDQutGA0YvRgtGL0Lkg0LLQvtC/0YDQvtGBINGBINC10LTQuNC90LjRh9C90YvQvCDQstGL0LHQvtGA0L7QvCIgTkVYVF9JRD0iSU5UX0hBTFQiPjxFIElEPSIxIiBURVhUPSLQkNC70YzRgtC10YDQvdCw0YLQuNCy0LAgMSZsdDtici8mZ3Q7wqAmbHQ7YnIvJmd0OyI+PC9FPjxFIElEPSIyIiBURVhUPSLQkNC70YzRgtC10YDQvdCw0YLQuNCy0LAgMiI+PC9FPjwvUTE+DQo8SU5UX0hBTFQgQUxHPSJ0aWxlOi8vc3lzX21fdHMvcS9nLm0iIFdERz0idGlsZTovL3N5c19tX3RzL3Evdy53IiBJTUFHRT0ibWxzcDovL3NjYWxlLWltZy9iYXNlL2luZm9ycSIgSVNfTEFTVD0iMSIgQ0FQVElPTj0i0JfQsNCy0LXRgNGI0LXQvdC90Y8iIFNVQkNBUFRJT049ItCS0Lgg0LLRltC00L/QvtCy0ZbQu9C4INC90LAg0LLRgdGWINC/0LjRgtCw0L3QvdGPINGW0L3RgtC10YDQsifRjiIgSU5GT19URVhUPSLQktC4INC80LDRlNGC0LUg0LfQvNC+0LPRgyDQstC40L/RgNCw0LLQuNGC0Lgg0LLQstC10LTQtdC90ZYg0LLRltC00L/QvtCy0ZbQtNGWLCDQv9C+0LLQtdGA0L3Rg9Cy0YjQuNGB0Ywg0L3QsNC30LDQtCDRgtCwINCy0L3RltGB0YjQuCDQstGW0LTQv9C+0LLRltC00L3RliDQv9GA0LDQstC60LguICZsdDtici8mZ3Q7INCU0LvRjyDQt9Cw0LLQtdGA0YjQtdC90L3Rjywg0L3QsNGC0LjRgdC90ZbRgtGMICfQlNCw0LvRliciLz4NCjxBQ1RJVkVfRElTUExBWV9MSVNUPg0KPEUgQ0FQVElPTj0iIiBOQU1FPSIiLz4NCjwvQUNUSVZFX0RJU1BMQVlfTElTVD4NCjxBTktFVEFfTEVWRUxfTElTVD4NCjxFIElOVEVSVklFVz0iIiBBTktFVEE9IiIvPg0KPC9BTktFVEFfTEVWRUxfTElTVD4NCjxTWVNURU1fTEVWRUxfTElTVD4NCjxFIElOVEVSVklFVz0iIiBTWVNURU09IiIvPg0KPC9TWVNURU1fTEVWRUxfTElTVD4NCjwvdGVzdD4=";
    $anket_hanenko = "PHRlc3QgICAgIEFMRz0idGlsZTovL3NhcnNfaW50L2F0Lm0iIFVJRD0ibXVzZXVtX2ltZyIgTkFNRT0i0J7Qv9GA0L7RgdC90LjQuiDQv9C+0YHQtdGC0LjRgtC10LvQtdC5INC80YPQt9C10Y8g0KXQsNC90LXQvdC60L4g0YEg0LrQsNGA0YLQuNC90LrQsNC80LgiPg0KPEVFTEMwICBBTEc9InRpbGU6Ly9zYXJzX2ludC9xL3N0Lm0iIE5FWFRfSURfUz0iRUVMQzEiIE5FWFRfSUQ9Ik1CbG9jayIvPg0KDQo8RUVMQzEgQUxHPSJ0aWxlOi8vc2Fyc19pbnQvcS9jZy5tIiBORVhUX0lEPSJJTlRfSEFMVCIvPg0KPE0xIEFMRz0idGlsZTovL3NhcnNfaW50L3Evcy5tIiBRVUVTVElPTj0iTTEuINCa0LDQuiDRh9Cw0YHRgtC+INCS0Ysg0L/QvtGB0LXRidCw0LXRgtC1INC80YPQt9C10Lg/INCe0JTQmNCdINCe0KLQktCV0KIuICZsdDtici8mZ3Q7Jmx0O2JyLyZndDsmbHQ7aW1nIHNyYz0mcXVvdDt+RklMRURJUn4wLnBuZyZxdW90Oy8mZ3Q7Jmx0O2JyLyZndDsmbHQ7YnIvJmd0OyIgTkVYVF9JRD0iTTIiPjxFIElEPSIxIiBURVhUPSIyLTMg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOIj48L0U+PEUgSUQ9IjIiIFRFWFQ9IjEg0YDQsNC3INCyINC90LXQtNC10LvRjiI+PC9FPjxFIElEPSIzIiBURVhUPSIxINGA0LDQtyDQsiDQvNC10YHRj9GGIj48L0U+PEUgSUQ9IjQiIFRFWFQ9IjEg0YDQsNC3INCyINC+0LTQuNC9LdC00LLQsCDQvNC10YHRj9GG0LAiPjwvRT48RSBJRD0iNSIgVEVYVD0iMi00INGA0LDQt9CwINCyINCz0L7QtCI+PC9FPjxFIElEPSI2IiBURVhUPSIxINGA0LDQtyDQsiDQs9C+0LQg0Lgg0YDQtdC20LUiPjwvRT48L00xPg0KPE0yIEFMRz0idGlsZTovL3NhcnNfaW50L3EvbS5tIiBRVUVTVElPTj0iTTIuINChINC60LXQvCDQktGLINC+0LHRi9GH0L3QviDQv9C+0YHQtdGJ0LDQtdGC0LUg0LzRg9C30LXQuD8g0J3QldCh0JrQntCb0KzQmtCeINCS0JDQoNCY0JDQndCi0J7QkiDQntCi0JLQldCi0J7Qki4gJmx0O2JyLyZndDsmbHQ7YnIvJmd0OyZsdDtpbWcgc3JjPSZxdW90O35GSUxFRElSfjEucG5nJnF1b3Q7LyZndDsmbHQ7YnIvJmd0OyZsdDtici8mZ3Q7IiBBTk9USEVSX1RGPSJUcnVlIiBORVhUX0lEPSJNMyI+PEUgSUQ9IjEiIFRFWFQ9ItCe0LTQuNC9ICZsdDtici8mZ3Q7Ij48L0U+PEUgSUQ9IjIiIFRFWFQ9ItCS0LzQtdGB0YLQtSDRgdC+INC30L3QsNGH0LjQvNGL0Lwg0LLRgtC+0YDRi9C8ICjQsdC+0LnRhNGA0LXQvdC0L9Cz0LXRgNC70YTRgNC10L3QtCwg0L/QsNGA0YLQvdC10YAv0L/QsNGA0YLQvdC10YDRiNCwLCDQvNGD0LYv0LbQtdC90LApIj48L0U+PEUgSUQ9IjMiIFRFWFQ9ItChINCx0LvQuNC30LrQuNC80Lgg0YDQvtC00YHRgtCy0LXQvdC90LjQutCw0LzQuCAo0YDQvtC00LjRgtC10LvQuCwg0LHRgNCw0YIv0YHQtdGB0YLRgNCwKSI+PC9FPjxFIElEPSI0IiBURVhUPSLQoSDQsdC70LjQt9C60LjQvNC4INGA0L7QtNGB0YLQstC10L3QvdC40LrQsNC80LggKNGBINC00LXRgtGM0LzQuCkiPjwvRT48RSBJRD0iNSIgVEVYVD0i0KEg0LTRgNGD0LfRjNGP0LzQuCwg0YLQvtCy0LDRgNC40YnQsNC80LgiPjwvRT48RSBJRD0iNiIgVEVYVD0i0KEg0Y3QutGB0LrRg9GA0YHQuNC+0L3QvdC+0Lkg0LPRgNGD0L/Qv9C+0LkiPjwvRT48RSBJRD0iNyIgVEVYVD0i0JTRgNGD0LPQvtC1IiBPVEhFUj0iVHJ1ZSI+PC9FPjwvTTI+DQo8TTMgQUxHPSJ0aWxlOi8vc2Fyc19pbnQvcS9zLm0iIFFVRVNUSU9OPSJNMy4g0JAg0YEg0LrQtdC8INC/0YDQuNGI0LvQuCDRgdC10LPQvtC00L3Rjz/CoNCe0JTQmNCdINCe0KLQktCV0KIuIiBBTk9USEVSX1RGPSJUcnVlIiBORVhUX0lEPSJNNCI+PEUgSUQ9IjEiIFRFWFQ9ItCe0LTQuNC9ICZsdDtici8mZ3Q7Jmx0O2JyLyZndDsmbHQ7aW1nIHNyYz0mcXVvdDt+RklMRURJUn4yLnBuZyZxdW90Oy8mZ3Q7Jmx0O2JyLyZndDsmbHQ7YnIvJmd0OyI+PC9FPjxFIElEPSIyIiBURVhUPSLQktC80LXRgdGC0LUg0YHQviDQt9C90LDRh9C40LzRi9C8INCy0YLQvtGA0YvQvCAo0LHQvtC50YTRgNC10L3QtC/Qs9C10YDQu9GE0YDQtdC90LQsINC/0LDRgNGC0L3QtdGAL9C/0LDRgNGC0L3QtdGA0YjQsCwg0LzRg9C2L9C20LXQvdCwKSAmbHQ7YnIvJmd0OyZsdDtici8mZ3Q7Jmx0O2ltZyBzcmM9JnF1b3Q7fkZJTEVESVJ+My5wbmcmcXVvdDsvJmd0OyZsdDtici8mZ3Q7Jmx0O2JyLyZndDsiPjwvRT48RSBJRD0iMyIgVEVYVD0i0KEg0LHQu9C40LfQutC40LzQuCDRgNC+0LTRgdGC0LLQtdC90L3QuNC60LDQvNC4ICjRgNC+0LTQuNGC0LXQu9C4LCDQsdGA0LDRgi/RgdC10YHRgtGA0LApIj48L0U+PEUgSUQ9IjQiIFRFWFQ9ItChINCx0LvQuNC30LrQuNC80Lgg0YDQvtC00YHRgtCy0LXQvdC90LjQutCw0LzQuCAo0YEg0LTQtdGC0YzQvNC4KSAmbHQ7YnIvJmd0OyZsdDtici8mZ3Q7Jmx0O2ltZyBzcmM9JnF1b3Q7fkZJTEVESVJ+NC5wbmcmcXVvdDsvJmd0OyZsdDtici8mZ3Q7Jmx0O2JyLyZndDsiPjwvRT48RSBJRD0iNSIgVEVYVD0i0KEg0LTRgNGD0LfRjNGP0LzQuCwg0YLQvtCy0LDRgNC40YnQsNC80LgiPjwvRT48RSBJRD0iNiIgVEVYVD0i0KEg0Y3QutGB0LrRg9GA0YHQuNC+0L3QvdC+0Lkg0LPRgNGD0L/Qv9C+0LkiPjwvRT48RSBJRD0iNyIgVEVYVD0i0JTRgNGD0LPQvtC1IiBPVEhFUj0iVHJ1ZSI+PC9FPjwvTTM+DQo8TTQgQUxHPSJ0aWxlOi8vc2Fyc19pbnQvcS9tLm0iIFFVRVNUSU9OPSJNNC4g0JIg0LzRg9C30LXQtSDQktGLINC/0YDQtdC00L/QvtGH0LjRgtCw0LXRgtC1INC/0L7RgdC10YnQsNGC0YzigKYgJmx0O3N0cm9uZyZndDvQndCV0KHQmtCe0JvQrNCa0J4g0JLQkNCg0JjQkNCd0KLQntCSINCe0KLQktCV0KLQntCSLiAmbHQ7L3N0cm9uZyZndDsmbHQ7YnIvJmd0OyZsdDtpbWcgc3JjPSZxdW90O35GSUxFRElSfjUucG5nJnF1b3Q7LyZndDsmbHQ7YnIvJmd0OyZsdDtici8mZ3Q7Jmx0O2JyLyZndDsiIE5FWFRfSUQ9Ik1CbG9ja0UiPjxFIElEPSIxIiBURVhUPSLQn9C+0YHRgtC+0Y/QvdC90LDRjyDRjdC60YHQv9C+0LfQuNGG0LjRjyDQvNGD0LfQtdGPIj48L0U+PEUgSUQ9IjIiIFRFWFQ9ItCS0YDQtdC80LXQvdC90YvQtSDQstGL0YHRgtCw0LLQutC4INC40Lcg0LrQvtC70LvQtdC60YbQuNC4INC80YPQt9C10Y8iPjwvRT48RSBJRD0iMyIgVEVYVD0i0JPQvtGB0YLQtdCy0YvQtSDQstGL0YHRgtCw0LLQutC4Ij48L0U+PEUgSUQ9IjQiIFRFWFQ9ItCc0LXRgNC+0L/RgNC40Y/RgtC40Y8sINC60L7QvdGG0LXRgNGC0YsiPjwvRT48RSBJRD0iNSIgVEVYVD0i0J3QtdGG0LXQu9C10L3QsNC/0YDQsNCy0LvQtdC90L3QvtC1INC/0L7RgdC10YnQtdC90LjQtSI+PC9FPjxFIElEPSI5OSIgVEVYVD0i0KLQoNCj0JTQndCeINCh0JrQkNCX0JDQotCsIC8g0J3QlSDQl9Cd0JDQriIgU0VSVklDRT0iVHJ1ZSIgSU5DT01QQVRJQkxFPSJGYWxzZSI+PC9FPjwvTTQ+DQo8TUJsb2NrIEFMRz0idGlsZTovL3NhcnNfaW50L3EvY2cubSIgTkVYVF9JRD0iTTEiLz4NCjxNQmxvY2tFIEFMRz0idGlsZTovL3NhcnNfaW50L3EvcnQubSIvPg0KPElOVF9IQUxUIEFMRz0idGlsZTovL3N5c19tX3RzL3EvZy5tIiBXREc9InRpbGU6Ly9zeXNfbV90cy9xL3cudyIgSU1BR0U9Im1sc3A6Ly9zY2FsZS1pbWcvYmFzZS9pbmZvcnEiIElTX0xBU1Q9IjEiIENBUFRJT049ItCX0LDQstC10YDRiNC10L3QvdGPIiBTVUJDQVBUSU9OPSLQktC4INCy0ZbQtNC/0L7QstGW0LvQuCDQvdCwINCy0YHRliDQv9C40YLQsNC90L3RjyDRltC90YLQtdGA0LIn0Y4iIElORk9fVEVYVD0i0JLQuCDQvNCw0ZTRgtC1INC30LzQvtCz0YMg0LLQuNC/0YDQsNCy0LjRgtC4INCy0LLQtdC00LXQvdGWINCy0ZbQtNC/0L7QstGW0LTRliwg0L/QvtCy0LXRgNC90YPQstGI0LjRgdGMINC90LDQt9Cw0LQg0YLQsCDQstC90ZbRgdGI0Lgg0LLRltC00L/QvtCy0ZbQtNC90ZYg0L/RgNCw0LLQutC4LiAmbHQ7YnIvJmd0OyDQlNC70Y8g0LfQsNCy0LXRgNGI0LXQvdC90Y8sINC90LDRgtC40YHQvdGW0YLRjCAn0JTQsNC70ZYnIi8+DQo8QUNUSVZFX0RJU1BMQVlfTElTVD4NCjxFIENBUFRJT049IiIgTkFNRT0iIi8+DQo8L0FDVElWRV9ESVNQTEFZX0xJU1Q+DQo8QU5LRVRBX0xFVkVMX0xJU1Q+DQo8RSBJTlRFUlZJRVc9IiIgQU5LRVRBPSIiLz4NCjwvQU5LRVRBX0xFVkVMX0xJU1Q+DQo8U1lTVEVNX0xFVkVMX0xJU1Q+DQo8RSBJTlRFUlZJRVc9IiIgU1lTVEVNPSIiLz4NCjwvU1lTVEVNX0xFVkVMX0xJU1Q+DQo8L3Rlc3Q+";
    $decoded = base64_decode($anket_hanenko);
    //echo $decoded;
    file_put_contents("hanenko/decoded_hanenko_anket.xml",$decoded);
?>