// Auto-bundled data — mirrors the JSON files in this directory so the tool
// works by double-clicking index.html (no web server, no fetch across file://).
// If you edit the JSON files, copy the values here too.

const STATES_DATA = {
  "_source": "Kroeze, Kristensen, Pucher — 171Yb Reference Data (Feb 2026), arXiv:2509.04416v2",
  "states": [
    {
      "id": "1S0",
      "label": "6s² ¹S₀",
      "term": "1S0",
      "config": "6s²",
      "L": 0, "S": 0, "J": 0,
      "energy_cm": 0,
      "lifetime": "stable",
      "gJ": null,
      "hyperfine_171": {
        "A_hfs_MHz": 0,
        "levels": [{"F": 0.5, "gF_kHzG": -0.7505, "gF_err": 0.0006}]
      },
      "notes": "Ground state. μB·gF arises from nuclear spin only (gI·μN). No fine structure."
    },
    {
      "id": "3P0",
      "label": "6s6p ³P₀",
      "term": "3P0",
      "config": "6s6p",
      "L": 1, "S": 1, "J": 0,
      "energy_cm": 17288.4882,
      "lifetime_s": 21.0,
      "lifetime_err": 1.8,
      "gJ": null,
      "hyperfine_171": {
        "A_hfs_MHz": 0,
        "levels": [{"F": 0.5, "gF_kHzG": -1.1496, "gF_err": 0.0006}]
      },
      "notes": "Metastable clock state. Finite E1 decay in <sup>171</sup>Yb via hyperfine mixing gives ~21 s lifetime. In bosonic <sup>174</sup>Yb, the J=0 → J=0 transition is forbidden without an external mixing field."
    },
    {
      "id": "3P1",
      "label": "6s6p ³P₁",
      "term": "3P1",
      "config": "6s6p",
      "L": 1, "S": 1, "J": 1,
      "energy_cm": 17992.0613,
      "lifetime_ns": 872.6,
      "lifetime_err": 1.9,
      "gJ": 1.492820,
      "gJ_err": 0.000031,
      "hyperfine_171": {
        "A_hfs_MHz": 3957.85,
        "A_err": 0.05,
        "levels": [
          {"F": 0.5, "gF_kHzG": 2786.10, "gF_err": 0.06},
          {"F": 1.5, "gF_kHzG": 1392.674, "gF_err": 0.029}
        ]
      },
      "notes": "Intercombination line. Green MOT upper state. ~1.7% singlet admixture via spin-orbit coupling (β ≈ −0.12905)."
    },
    {
      "id": "3P2",
      "label": "6s6p ³P₂",
      "term": "3P2",
      "config": "6s6p",
      "L": 1, "S": 1, "J": 2,
      "energy_cm": 19710.4467,
      "lifetime_s": 8.9,
      "gJ": 1.501,
      "gJ_theoretical": true,
      "hyperfine_171": {
        "A_hfs_MHz": 2680.9,
        "A_err": 2.0,
        "levels": [
          {"F": 1.5, "gF_kHzG": 2521, "approx": true},
          {"F": 2.5, "gF_kHzG": 1681, "approx": true}
        ]
      },
      "notes": "Metastable. Green clock upper state. Decays via M2 to 1S0, M1 to 3P1, and hyperfine-induced E1 channels in <sup>171</sup>Yb."
    },
    {
      "id": "1P1",
      "label": "6s6p ¹P₁",
      "term": "1P1",
      "config": "6s6p",
      "L": 1, "S": 0, "J": 1,
      "energy_cm": 25068.2581,
      "lifetime_ns": 5.464,
      "lifetime_err": 0.011,
      "gJ": 1.035,
      "gJ_err": 0.005,
      "hyperfine_171": {
        "A_hfs_MHz": -214.06,
        "A_err": 0.17,
        "levels": [
          {"F": 0.5, "gF_kHzG": 1932, "gF_err": 9},
          {"F": 1.5, "gF_kHzG": 965, "gF_err": 5}
        ]
      },
      "notes": "Broad dipole-allowed line. Blue MOT / Zeeman slower upper state. Branching back to ground ~ 1 − 6×10⁻⁸, effectively cycling."
    },
    {
      "id": "3D1",
      "label": "5d6s ³D₁",
      "term": "3D1",
      "config": "5d6s",
      "L": 2, "S": 1, "J": 1,
      "energy_cm": 24489.14,
      "lifetime_ns": 332,
      "lifetime_err": 11,
      "gJ": 0.499,
      "gJ_theoretical": true,
      "hyperfine_171": {
        "A_hfs_MHz": -2038.30,
        "A_err": 0.11,
        "levels": [
          {"F": 0.5, "gF_kHzG": 931, "approx": true},
          {"F": 1.5, "gF_kHzG": 465, "approx": true}
        ]
      },
      "notes": "IR repumper target from ³P₀. Branches to ³P₀ (64%), ³P₁ (35%), ³P₂ (1%)."
    },
    {
      "id": "3D2",
      "label": "5d6s ³D₂",
      "term": "3D2",
      "config": "5d6s",
      "L": 2, "S": 1, "J": 2,
      "energy_cm": 24751.95,
      "gJ": 1.167,
      "gJ_theoretical": true,
      "hyperfine_171": {
        "A_hfs_MHz": 1313.8,
        "A_err": 3.3,
        "levels": [
          {"F": 1.5, "gF_kHzG": 1960, "approx": true},
          {"F": 2.5, "gF_kHzG": 1307, "approx": true}
        ]
      },
      "notes": "Sibling of ³D₁ in the 5d6s manifold. Not a primary cooling/repumping target."
    },
    {
      "id": "3S1",
      "label": "6s7s ³S₁",
      "term": "3S1",
      "config": "6s7s",
      "L": 0, "S": 1, "J": 1,
      "energy_cm": 32694.7523,
      "lifetime_ns": 13.8,
      "lifetime_err": 1.7,
      "gJ": 2.01,
      "gJ_err": 0.01,
      "hyperfine_171": {
        "A_hfs_MHz": 6838.41,
        "A_err": 0.26,
        "levels": [
          {"F": 0.5, "gF_kHzG": 3751, "gF_err": 19},
          {"F": 1.5, "gF_kHzG": 1875, "gF_err": 9}
        ]
      },
      "notes": "Red repumper target from ³P₀ (649 nm) and ³P₂ (770 nm). Branches to ³P₂ (51%), ³P₁ (36%), ³P₀ (13%), ¹P₁ (0.21%)."
    }
  ]
};

const TRANSITIONS_DATA = {
  "_source": "Tables 8–14, Kroeze/Kristensen/Pucher 171Yb reference data",
  "transitions": [
    {
      "id": "blue_MOT",
      "from": "1S0", "to": "1P1",
      "name": "Zeeman slower / Blue MOT",
      "color": "#6a4cff",
      "omega_THz": 751.5274711, "omega_err": 0.0000008,
      "lambda_vac_nm": 398.9108443, "lambda_vac_err": 0.0000004,
      "lambda_air_nm": 398.802070, "lambda_air_err": 0.000004,
      "wavenumber_cm": 25068.258091,
      "energy_eV": 3.1080678856,
      "lifetime_ns": 5.464, "lifetime_err": 0.011,
      "Gamma_s": 1.830e8, "Gamma_err": 4e5,
      "linewidth_MHz": 29.13, "linewidth_err": 0.06,
      "branching": 1.0,
      "branching_note": "1 − 6(4)×10⁻⁸",
      "f_osc": 1.3098, "f_err": 0.0027,
      "v_recoil_mms": 5.852,
      "omega_recoil_kHz": 7.335,
      "T_recoil_nK": 704,
      "doppler_kHz": 14.670,
      "T_Doppler_uK": 699.0, "T_Doppler_err": 1.5,
      "reduced_dipole_ea0": 4.147, "reduced_dipole_err": 0.004,
      "Isat_mWcm2": 59.97, "Isat_err": 0.12,
      "sigma0_m2": 7.598e-14,
      "Rabi_MHz": 42.44, "Rabi_err": 0.04,
      "Rabi_note": "|½,½⟩→|³⁄₂,³⁄₂⟩, σ⁺"
    },
    {
      "id": "yellow_clock",
      "from": "1S0", "to": "3P0",
      "name": "Yellow clock",
      "color": "#e8b800",
      "omega_THz": 518.295836590863, "omega_err": 1e-9,
      "lambda_vac_nm": 578.4195759161625,
      "lambda_air_nm": 578.264935, "lambda_air_err": 0.000006,
      "wavenumber_cm": 17288.488177740069,
      "energy_eV": 2.1434993488389615,
      "lifetime_s": 21.0, "lifetime_err": 1.8,
      "Gamma_s": 0.048, "Gamma_err": 0.004,
      "linewidth_mHz": 7.6, "linewidth_err": 0.6,
      "v_recoil_mms": 4.036,
      "omega_recoil_kHz": 3.489,
      "T_recoil_nK": 335,
      "doppler_kHz": 6.977,
      "notes": "Forbidden in bosonic <sup>174</sup>Yb without an external mixing field. J=0 → J=0; activated in <sup>171</sup>Yb by hyperfine-induced E1 mixing."
    },
    {
      "id": "green_MOT",
      "from": "1S0", "to": "3P1",
      "name": "Green MOT (intercombination)",
      "color": "#2dd36f",
      "omega_THz": 539.38842684, "omega_err": 0.00000012,
      "lambda_vac_nm": 555.80068663, "lambda_vac_err": 0.00000013,
      "lambda_air_nm": 555.651877, "lambda_air_err": 0.000006,
      "wavenumber_cm": 17992.061256,
      "energy_eV": 2.2307312930,
      "lifetime_ns": 872.6, "lifetime_err": 1.9,
      "Gamma_s": 1.1460e6, "Gamma_err": 2500,
      "linewidth_kHz": 182.4, "linewidth_err": 0.4,
      "f_osc": 0.015923, "f_err": 0.000035,
      "v_recoil_mms": 4.200,
      "omega_recoil_kHz": 3.778,
      "T_recoil_nK": 363,
      "doppler_kHz": 7.557,
      "T_Doppler_uK": 4.377, "T_Doppler_err": 0.010,
      "reduced_dipole_ea0": 0.5398, "reduced_dipole_err": 0.0030,
      "Isat_uWcm2": 138.85, "Isat_err": 0.30,
      "sigma0_m2": 1.475e-13,
      "Rabi_MHz": 5.523, "Rabi_err": 0.006,
      "Rabi_note": "|½,½⟩→|³⁄₂,³⁄₂⟩, σ⁺"
    },
    {
      "id": "green_clock",
      "from": "1S0", "to": "3P2",
      "name": "Green clock (E2/M2)",
      "color": "#14b85f",
      "omega_THz": 590.90433, "omega_err": 0.00004,
      "lambda_vac_nm": 507.34517, "lambda_vac_err": 0.00004,
      "lambda_air_nm": 507.20882, "lambda_air_err": 0.00004,
      "wavenumber_cm": 19710.4467,
      "energy_eV": 2.44378393,
      "lifetime_s": 8.9,
      "Gamma_s": 0.112,
      "linewidth_mHz": 17.9,
      "v_recoil_mms": 4.601,
      "omega_recoil_kHz": 4.535,
      "T_recoil_nK": 435,
      "doppler_kHz": 9.069,
      "notes": "Magnetic-quadrupole transition. Narrow but experimentally hard. Relevant for quantum simulation with ³P₂."
    },
    {
      "id": "IR_repumper",
      "from": "3P0", "to": "3D1",
      "name": "IR repumper (yellow clock)",
      "color": "#888",
      "omega_THz": 215.87014457, "omega_err": 9e-8,
      "lambda_vac_nm": 1388.7629464, "lambda_vac_err": 0.0000006,
      "lambda_air_nm": 1388.396915, "lambda_air_err": 0.000014,
      "wavenumber_cm": 7200.6529453,
      "energy_eV": 0.8927671836,
      "lifetime_ns": 332, "lifetime_err": 11,
      "Gamma_s": 3.01e6, "Gamma_err": 1e5,
      "linewidth_kHz": 479, "linewidth_err": 16,
      "branching_channels": [
        {"to": "3P2", "value": 0.0099, "err": 0.0039},
        {"to": "3P1", "value": 0.352, "err": 0.027},
        {"to": "3P0", "value": 0.638, "err": 0.027}
      ],
      "Gamma_partial_s": 1.92e6, "Gamma_partial_err": 1e5,
      "v_recoil_mms": 1.681,
      "omega_recoil_Hz": 605.2,
      "T_recoil_nK": 58.1,
      "doppler_kHz": 1.210,
      "T_Doppler_uK": 11.5, "T_Doppler_err": 0.4,
      "reduced_dipole_ea0": 2.76, "reduced_dipole_err": 0.07,
      "Rabi_MHz": 28.3, "Rabi_err": 0.8
    },
    {
      "id": "red_repumper_yellow",
      "from": "3P0", "to": "3S1",
      "name": "Red repumper (yellow clock)",
      "color": "#c73e3a",
      "omega_THz": 461.86817672, "omega_err": 2.2e-7,
      "lambda_vac_nm": 649.08662928, "lambda_vac_err": 0.00000031,
      "lambda_air_nm": 648.913718, "lambda_air_err": 0.000006,
      "wavenumber_cm": 15406.264047,
      "energy_eV": 1.9101332987,
      "lifetime_ns": 13.8, "lifetime_err": 1.7,
      "Gamma_s": 7.2e7, "Gamma_err": 9e6,
      "linewidth_MHz": 11.5, "linewidth_err": 1.4,
      "branching_channels": [
        {"to": "3P2", "value": 0.508, "err": 0.026},
        {"to": "3P1", "value": 0.360, "err": 0.025},
        {"to": "3P0", "value": 0.130, "err": 0.013},
        {"to": "1P1", "value": 0.0021, "err": 0.0009}
      ],
      "Gamma_partial_s": 9.4e6, "Gamma_partial_err": 1.5e6,
      "v_recoil_mms": 3.596,
      "omega_recoil_kHz": 2.770,
      "T_recoil_nK": 266,
      "doppler_kHz": 5.541,
      "T_Doppler_uK": 277, "T_Doppler_err": 33,
      "reduced_dipole_ea0": 1.96, "reduced_dipole_err": 0.15,
      "Rabi_MHz": 20.0, "Rabi_err": 1.6
    },
    {
      "id": "red_repumper_green",
      "from": "3P2", "to": "3S1",
      "name": "Red repumper (green clock)",
      "color": "#c73e3a",
      "omega_THz": 389.2598337, "omega_err": 6e-7,
      "lambda_vac_nm": 770.160284, "lambda_vac_err": 0.000011,
      "lambda_air_nm": 769.955919, "lambda_air_err": 0.000008,
      "wavenumber_cm": 12984.310422,
      "energy_eV": 1.6098493199,
      "lifetime_ns": 13.8, "lifetime_err": 1.7,
      "Gamma_s": 7.2e7, "Gamma_err": 9e6,
      "linewidth_MHz": 11.5, "linewidth_err": 1.4,
      "branching_channels": [
        {"to": "3P2", "value": 0.508, "err": 0.026},
        {"to": "3P1", "value": 0.360, "err": 0.025},
        {"to": "3P0", "value": 0.130, "err": 0.013},
        {"to": "1P1", "value": 0.0021, "err": 0.0009}
      ],
      "Gamma_partial_s": 3.7e7, "Gamma_partial_err": 5e6,
      "v_recoil_mms": 3.031,
      "omega_recoil_kHz": 1.968,
      "T_recoil_nK": 189,
      "doppler_kHz": 3.936,
      "T_Doppler_uK": 277, "T_Doppler_err": 33,
      "reduced_dipole_ea0": 4.99, "reduced_dipole_err": 0.32,
      "Rabi_MHz": 39.5, "Rabi_err": 2.6
    }
  ],
  "isotope_shifts_MHz": {
    "174": {"1P1": 0, "3P0": 0, "3P1": 0, "3P2": 0, "3D1": 0, "3D2": 0, "3S1": 0},
    "171": {
      "1P1": 940.8,
      "3P0": 1811.2816473,
      "3P1": 1826.88,
      "3P2": null,
      "3D1": 2038.9,
      "3D2": 2019,
      "3S1": 1057.34
    }
  }
};

const POLARIZABILITY_DATA = {
  "magic": [
    {"transition": "1S0–1P1", "lambda_nm": 532, "alpha_au": 258, "isotope": "174", "beta_deg": 0, "note": "F′=3/2, m_F′=±3/2"},
    {"transition": "1S0–3P0", "lambda_nm": 397.634, "alpha_au": -15495, "beta_deg": "∀∠"},
    {"transition": "1S0–3P0", "lambda_nm": 459.5960, "alpha_au": 469, "beta_deg": "∀∠"},
    {"transition": "1S0–3P0", "lambda_nm": 552.61074, "alpha_au": 57, "isotope": "174", "beta_deg": "∀∠"},
    {"transition": "1S0–3P0–3P1", "lambda_nm": 759.3560633, "alpha_au": 188, "beta_deg": 17, "note": "Canonical clock lattice magic λ"},
    {"transition": "1S0–3P1 m=±1/2", "lambda_nm": 486.78, "alpha_au": 370},
    {"transition": "1S0–3P1 m=±1/2", "lambda_nm": 1036.13, "alpha_au": 162},
    {"transition": "1S0–3P1 m=+3/2", "lambda_nm": 483, "alpha_au": 359, "beta_deg": 90},
    {"transition": "1S0–3P1 m=+3/2", "lambda_nm": 783.8, "alpha_au": 184, "beta_deg": 90},
    {"transition": "1S0–3P1 m=+3/2", "lambda_nm": 1036.12, "alpha_au": 162, "isotope": "174", "beta_deg": 0},
    {"transition": "1S0–3P1 m=+3/2", "lambda_nm": 1035.83, "alpha_au": 162, "isotope": "174", "beta_deg": 90}
  ],
  "tune_out": [
    {"state": "1S0", "lambda_nm": 553.2936, "isotope": "174", "alpha_au": 0},
    {"state": "3P0", "lambda_nm": 576.613, "isotope": "174", "alpha_au": 277}
  ]
};
