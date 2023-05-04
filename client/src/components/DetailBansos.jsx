import React from "react";
import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineImport,
    AiOutlineUser,
    AiOutlineDashboard,
    AiOutlineTeam,
    AiOutlineQrcode,
} from "react-icons/ai";
import "./DetailBansos.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetailBansos() {
    const params = useParams();
    const [bansos, setBansos] = useState(null);
    const [datawarga, setDatawarga] = useState(null);
    useEffect(() => {
        console.log(params, "params");
        Axios.post("http://localhost:3001/getdatawarga", { bansos_id: params.id })
            .then((response) => setDatawarga(response.data))
            .catch((error) => console.log(error));

        Axios.post("http://localhost:3001/getbansosbyid", { bansos_id: params.id })
            .then((response) => setBansos(response.data))
            .catch((error) => console.log(error));
    }, [params]);

    return (
        <>
            <div className='detailbansos_wrapper'>
                <div className='sidebar'>
                    <div className='upper_admin'>
                        <AiOutlineUser className='admin_pic' />
                        <div className='admin_name'>Admin</div>
                    </div>
                    <div className='sidebar_content'>
                        <div className='sidebar_items'>
                            <AiOutlineDashboard className='sidebar_icons' />
                            <p
                                onClick={() => {
                                    navigate("/admin");
                                }}
                                className='sidebar_items_text'>
                                Dashboard
                            </p>
                        </div>
                        <div className='sidebar_items'>
                            <AiOutlineTeam className='sidebar_icons' />
                            <p
                                onClick={() => {
                                    navigate("/datawarga");
                                }}
                                className='sidebar_items_text'>
                                Data Warga{" "}
                            </p>
                        </div>
                    </div>
                    <div className='lower_logout'>
                        <svg viewBox='0 0 100 5' xmlns='http://www.w3.org/2000/svg'>
                            <line x1='50' y1='0' x2='90' y2='0' stroke='#5D5D5D' strokeWidth={1} />
                            <line x1='50' y1='0' x2='10' y2='0' stroke='#5D5D5D' strokeWidth={1} />
                        </svg>
                        <div className='logout_items'>
                            <AiOutlineImport className='admin_pic' />
                            <p className='sidebar_items_text'>Logout</p>
                        </div>
                    </div>
                </div>
                <div className='detailbansos_content'>
                    <div className='detailbansos_header'>
                        <div className='detailbansos_title'>
                            <p className='detailbansos_titletext'>{bansos && bansos[0].nama_bansos}</p>
                            <p className='detailbansos_titleid'>ID : {bansos && bansos[0].bansos_id}</p>
                        </div>
                        <div className='detailbansos_tgl'>
                            {bansos && bansos[0].tgl1.slice(0, 10)} {<br></br>} s.d {<br></br>}
                            {"\n"}
                            {bansos && bansos[0].tgl2.slice(0, 10)}
                        </div>
                        <div className='detailbansos_inputnkk'>
                            <label style={{ fontSize: "1.1rem" }}>Nomor Kartu Keluarga</label>
                            <input type='text' className='inputnkk_form' placeholder='NKK : 320120XXXXXXX' />
                        </div>
                        <div style={{ fontSize: "1.1rem" }} className='detailbansos_scanqr'>
                            <p>Scan QR</p>
                            <AiOutlineQrcode className='qricon' />
                        </div>
                    </div>
                    <div className='detailbansos_data'>
                        <table className='detailbansos_table'>
                            <tr className='theader_detailbansos'>
                                <th style={{ display: "flex", justifyContent: "center", width: "2%" }}>No</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "15%" }}>NKK</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "15%" }}>Nama</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "15%" }}>Alamat</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "10%" }}>
                                    Tanggal Claim
                                </th>
                                <th style={{ display: "flex", justifyContent: "center", width: "5%" }}>Sesi</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "5%" }}>No Antre</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "5%" }}>Status</th>
                                <th style={{ display: "flex", justifyContent: "center", width: "10%" }}>
                                    Konfirmasi Status
                                </th>
                            </tr>
                        </table>
                        <table className='detailbansos_table_content'>
                            {datawarga &&
                                datawarga.map((item, index) => {
                                    return (
                                        <tr className='detailbansos_itemdata'>
                                            <td style={{ display: "flex", justifyContent: "center", width: "2%" }}>
                                                {index + 1}
                                            </td>
                                            <td style={{ display: "flex", justifyContent: "center", width: "15%" }}>
                                                {item.nkk}
                                            </td>
                                            <td
                                                style={{
                                                    wordBreak: "break-all",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "15%",
                                                }}>
                                                {item.nama}
                                            </td>
                                            <td
                                                style={{
                                                    wordBreak: "break-all",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "15%",
                                                }}>
                                                {item.alamat}
                                            </td>
                                            <td style={{ display: "flex", justifyContent: "center", width: "10%" }}>
                                                {item.tgl_claim}
                                            </td>
                                            <td style={{ display: "flex", justifyContent: "center", width: "5%" }}>
                                                {item.sesi}
                                            </td>
                                            <td style={{ display: "flex", justifyContent: "center", width: "5%" }}>
                                                {item.no_antre}
                                            </td>
                                            <td style={{ display: "flex", justifyContent: "center", width: "5%" }}>
                                                {item.status}
                                            </td>
                                            <td style={{ display: "flex", justifyContent: "center", width: "10%" }}>
                                                <AiOutlineCheckCircle
                                                    style={{ fill: "green", width: "20%", height: "20%" }}
                                                />
                                                <AiOutlineCloseCircle
                                                    style={{ fill: "red", width: "20%", height: "20%" }}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailBansos;
