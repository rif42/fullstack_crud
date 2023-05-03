import "./AdminDashboard.css";
import { AiOutlineImport, AiOutlineUser, AiOutlineDashboard, AiOutlineTeam } from "react-icons/ai";
import ScrollToTop from "./ScrollToTop";
import BuatBansos from "./BuatBansos";
import CardBansos from "./CardBansos";
import { useState } from "react";
import { ReactPropTypes } from "react";

function AdminDashboard() {
    // const exampledata = null;
    const exampledata = [
        {
            idbansos: 123123123,
            namabansos: "bansos example",
            tglbansos1: "2023-05-02",
            tglbansos2: "2023-05-25",
            sesibansos: 2,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
        {
            idbansos: 888888888,
            namabansos: "bansos example2",
            tglbansos1: "2023-05-03",
            tglbansos2: "2023-05-26",
            sesibansos: 3,
        },
    ];

    const [bansosdata, setBansosdata] = useState(exampledata);
    const [bansosform, setBansosform] = useState(0);

    function formtoggle() {
        setBansosform(!bansosform);
        console.log(bansosform, "form toggled");
    }

    return (
        <>
            <ScrollToTop />
            <div className='admin_wrapper'>
                <div className='sidebar'>
                    <div className='upper_admin'>
                        <AiOutlineUser className='admin_pic' />
                        <div className='admin_name'>Admin 1</div>
                    </div>
                    <div className='sidebar_content'>
                        <div className='sidebar_items'>
                            <AiOutlineDashboard className='admin_pic' />
                            <p className='sidebar_items_text'>Dashboard </p>
                        </div>
                        <div className='sidebar_items'>
                            <AiOutlineTeam className='admin_pic' />
                            <p className='sidebar_items_text'>Data Warga </p>
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

                <div className='admin_content'>
                    {bansosform ? (
                        <BuatBansos formtoggle={formtoggle} />
                    ) : bansosdata ? (
                        <CardBansos data={bansosdata} formtoggle={formtoggle} />
                    ) : (
                        <div className='buatbansos'>
                            <div
                                onClick={() => {
                                    setBansosform(!bansosform);
                                }}
                                className='tombol'>
                                Buat Bansos
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
