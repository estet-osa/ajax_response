<?php

/**
 * Class ArrayValue
 */
class ArrayValue implements JsonSerializable{

    /**
     * @param array $array
     */
    public function __construct(array $array){ $this->array = $array; }

    /**
     * @return array
     */
    public function jsonSerialize(){ return $this->array; }
}

    //Accept parameters...
    $data = json_decode($_POST['data']);

    //Something action SQL or not sql......

    $arr = array(0 => [
           'id' => $data->id,
           'area'          => 'area.ru.r4.a44.628',
           'rating'        => 2.000,
           'inn'           => '1234567890',
           'kpp'           => '987654321',
           'name'          => 'Название компании',
           'name_full'     => "Общество с ограниченной ответственностью \"Название компании\"",
           'address'       => '420087, Россия, Казань, Ленина, 15',
           'address_legal' => '420073 Казань Ленина 15, Россия',
           'anno_short'    => 'продажа спецодежды, спецобуви, средств индивидуальной защиты',
           'anno'          => 'Более полное описание',
           'phone'         => '(843) 295-12-34',
           'fax'           => '(843) 295-12-35',
           'site'          => '',
           'location'      => ["Россия","Приволжский","Республика Татарстан","Казань"]
        ]);

    echo json_encode(new ArrayValue($arr), JSON_PRETTY_PRINT);
