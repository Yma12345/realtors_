<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Objects;
use DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ObjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('objects')->delete();
        $json = Storage::disk('local')->get('houses.json');
        $data = json_decode($json);
        foreach($data as $object)
        {
            Objects::create(array(
              'id' => $object->id,
              'street' => $object->street,
              'place' => $object->place,
              'zipcode' => $object->zipcode,
              'region' => $object->region,
              'housenumber' => $object->housenumber,
              'rooms' => $object->rooms,
              'bedrooms' => $object->bedrooms,
              'building_date' => $object->building_date,
              'placement' => $object->placement,
              'surface' => $object->surface,
              'type' => $object->type,
              'date' => $object->date,
              'sold' => $object->sold,
              'price' => $object->price,
              'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
              'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ));
        }
    }
}
