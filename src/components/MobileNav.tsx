'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { NavLink } from './NavLink';
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import Divider from '@mui/material/Divider';


type Anchor = 'right';

export default function MobileNav() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <div className='bg-[#0F5E5A] h-full'>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <div className="flex flex-col items-start gap-y-5 p-5 text-lg text-white">
                    <div className='flex flex-col items-start gap-y-5 w-full'>
                        <div className='flex items-center justify-center w-full'>
                            <Image className="w-20 rounded-full" src='/profile.png' alt="profile" width={100} height={100}/>
                        </div>
                        <NavLink href='/'>
                            Dashboard
                        </NavLink>
                        <NavLink href='/tours'>
                            Tours
                        </NavLink>
                        <NavLink href='/guide'>
                            Guide
                        </NavLink>
                        <NavLink href='/calendar'>
                            Calendar
                        </NavLink>
                    </div>
                    <Divider className='w-full bg-white mt-2' />
                    <div className='flex flex-col gap-y-5 mt-5'>
                        <NavLink href='/profile'>
                            Profile
                        </NavLink>
                        <button>
                            Log Out
                        </button>
                    </div>
                </div>
            </Box>
        </div>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className='text-white text-3xl' onClick={toggleDrawer(anchor, true)}>
                        {anchor === 'right' ? <IoMenu /> : ""}
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}