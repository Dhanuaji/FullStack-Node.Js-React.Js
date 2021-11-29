import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div class="nav" id="navbar">
            <nav class="nav__container">
                <div>
                    <a href="/TR/dashboard" class="nav__link nav__logo" style={{textDecoration: 'none'}}>
                        <i class='bx bxs-disc nav__icon' ></i>
                        <span class="nav__logo-name">Formulatrix</span>
                    </a>

                    <div class="nav__list">
                        <div class="nav__items">
                            <h3 class="nav__subtitle">Home</h3>

                            <a href="/TR/dashboard" class="nav__link" style={{textDecoration: 'none'}}>
                                <i class='bx bx-home nav__icon' ></i>
                                <span class="nav__name">Dashboard</span>
                            </a>
                        </div>

                        <div class="nav__items">
                            <h3 class="nav__subtitle">Menu</h3>

                            <a href="/TR/insert-item" class="nav__link" style={{textDecoration: 'none'}}>
                                <i class='bx bx-notepad nav__icon' ></i>
                                <span class="nav__name">Request Mold Form</span>
                            </a>

                            <a href="/TR/insert-item" class="nav__link" style={{textDecoration: 'none'}}>
                                <i class='bx bx-notepad nav__icon' ></i>
                                <span class="nav__name">Product Specification Form</span>
                            </a>

                            <a href="/TR/insert-item" class="nav__link" style={{textDecoration: 'none'}}>
                                <i class='bx bx-notepad nav__icon' ></i>
                                <span class="nav__name">DFMEA Form</span>
                            </a>

                            <a href="/TR/insert-item" class="nav__link" style={{textDecoration: 'none'}}>
                                <i class='bx bx-notepad nav__icon' ></i>
                                <span class="nav__name">BOM Form</span>
                            </a>
                        </div>
                        <div className='nav-items'>
                            <h3 className="nav__subtitle">Report</h3>

                            <a href="/" class="nav__link" style={{textDecoration: 'none'}}>
                                <i class='bx bx-food-menu nav__icon' ></i>
                                <span class="nav__name">Annual Report</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
