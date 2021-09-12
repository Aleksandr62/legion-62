import { YMaps, Map, Placemark } from "react-yandex-maps";

export const MapContact = ({ title }) => {
  return (
    <YMaps>
      <Map defaultState={{ center: [54.579643, 39.808536], zoom: 14 }}>
        <Placemark
          geometry={[54.582643, 39.80856]}
          properties={{ iconCaption: title }}
        />
      </Map>
    </YMaps>
  );
};
