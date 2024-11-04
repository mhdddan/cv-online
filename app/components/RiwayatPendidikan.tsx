import exp from "constants";

function RowRiwayat (props:any) {
    return (
      <div className="border-2 border-blue-800 p-2 my-5">
      <div className="container mx-auto ">
      <div className="grid grid-cols-12 gap-1">
      <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div> 
        <div className="col-span-12 md:col-span-4 ">{props.sekolah}</div>
      <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
      </div>
      </div>
      </div>
      );
  }
  export default function  RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2x1">Riwayat Pendidikan</h2>
<RowRiwayat jenjang="SD" sekolah="SDN 1 PASAWAHAN" tahun="2011" />
<RowRiwayat jenjang="SMP" sekolah="MTs N 1 GARUT" tahun="2014" />
<RowRiwayat jenjang="SMA" sekolah="MAN 1 GARUT" tahun="2021" />
<RowRiwayat jenjang="Sarjana" sekolah="Ma'soem University" tahun="2025" />
</div>
);
}
