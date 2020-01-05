/* List out all utilities and constants in here */

export const Cars = {
	'proton': [
		{ 
			imgUrl: '/images/proton/Saga.png', 
			brand: 'proton', 
			title: 'Proton Saga', 
			appender: 'Saga', 
			description: 'Jenama pertama keluaran Proton, yang juga merupakan kereta nasional pertama. Walaupun usianya menjangkau lebih 31 tahun, namun keutuhannya tetap terbukti, bersemadi di setiap jiwa pengguna kereta Proton di Malaysia.' 
		},
		{ 
			imgUrl: '/images/proton/Iriz.png', 
			brand: 'proton', 
			title: 'Proton Iriz', 
			appender: 'Iriz', 
			description: 'Iriz ialah supermini lima pintu yang dibangunkan oleh Proton. Ia dilancarkan pada tahun 2014 sebagai pengganti spiritual bagi Proton Savvy dan dikuasakan oleh pelbagai mesin Proton 1.3L VVT dan 1.6L VVT serba-baharu.' 
		},
		{ 
			imgUrl: '/images/proton/Persona.png', 
			brand: 'proton', 
			title: 'Proton Persona', 
			appender: 'Persona', 
			description: 'Proton Persona menawarkan ruangan kepala yang lebih banyak, ruangan kaki yang boleh dibandingkan, dan ruangan but yang jauh lagi besar. Kereta serba baharu ini juga lebih berkuasa, lebih jimat minyak, dan lebih canggih daripada model Persona yang lama.' 
		},
		{ 
			imgUrl: '/images/proton/Exora.png', 
			brand: 'proton', 
			title: 'Proton Exora', 
			appender: 'Exora', 
			description: '	Diwarkan sebagai kereta MPV pertama buatan anak tempatan di Malaysia, Proton Exora merupakan kereta dengan ruang bersaiz besar yang sememangnya sesuai untuk kegunaan keluarga. Dijana oleh enjin berkuasa tinggi, Proton Exora merupakan pilihan tepat bagi mereka yang perlukan kereta dengan kapasiti ruang yang besar untuk pelbagai gunaan.' 
		},
		{ 
			imgUrl: '/images/proton/X70.jpg', 
			brand: 'proton', 
			title: 'Proton X70', 
			appender: 'X70', 
			description: 'Diwarkan sebagai kereta SUV mewah pertama keluaran tempatan, Proton X70 membawa pengalaman memandu anda ke alaf yang lebih tinggi, dan pada harga yang terrendah berbanding dengan kereta-kereta SUV lain di dalam kategori yang sama' 
		}
	]
};

export const CarsPricing = {
	Saga: [
		{ id: 1, tablecells: ['STD Manual', '35,728.07', '3,728.07', '32,000', '617', '465', '380', '424', { type: 'Saga STD Manual' }]},
		{ id: 2, tablecells: ['STD Auto', '38,792.62', '3,892.62', '34,900', '673', '507', '415', '459', { type: 'Saga STD Auto' }]},
		{ id: 3, tablecells: ['Premium Auto', '42,878.69', '4,378.69', '38,500', '743', '559', '458', '499', { type: 'Saga Premium Auto' }]}
	],
	Iriz: [
		{ id: 1, tablecells: ['STD 1.3 Manual', '39,714.14', '4,014.14', '35,700', '689', '519', '424', '477', { type: 'Iriz STD 1.3 Manual' }]},
		{ id: 2, tablecells: ['STD 1.3 CVT', '42,778.69', '4,278.69', '38,500', '743', '559', '458', '513', { type: 'Iriz STD 1.3 CVT' }]},
		{ id: 3, tablecells: ['Exec 1.3 CVT', '47,911.51', '4,811.51', '43,100', '831', '626', '512', '575', { type: 'Iriz Exec 1.3 CVT' }]},
		{ id: 4, tablecells: ['Exec 1.6 CVT', '49,954.55', '5,054.55', '44,900', '866', '652', '534', '599', { type: 'Iriz Exec 1.6 CVT' }]},
		{ id: 5, tablecells: ['Premium 1.6 CVT', '54,040.62', '5,440.62', '48,600', '938', '706', '578', '649', { type: 'Iriz Premium 1.6 CVT' }]}
	],
	Persona: [
		{ id: 1, tablecells: ['STD Manual', '45,768.47', '4,668.47', '41,100', '793', '597', '488','548', { type: 'Persona STD Manual' }]},
		{ id: 2, tablecells: ['STD CVT', '47,764.47', '4,864.47', '42,900', '828', '623', '510','572', { type: 'Persona STD CVT' }]},
		{ id: 3, tablecells: ['Exec CVT', '52,919.10', '5,319.10', '47,600', '918', '692', '566', '635', { type: 'Persona Exec CVT' }]},
		{ id: 4, tablecells: ['Premium CVT', '58,026.69', '5,826.69', '52,200', '1007', '758', '620', '697', { type: 'Persona Premium CVT' }]}
	],
	Exora: [
		{ id: 1, tablecells: ['Exec CVT', '63,837.03', '6,437.03', '57,400', '1115', '841', '689', '766', { type: 'Exora Exec CVT' }]},
		{ id: 2, tablecells: ['Premium CVT', '71,012.88', '7,112.88', '63,900', '1241', '936', '767', '853', { type: 'Exora Premium CVT' }]}
	],
	X70: [
		{ id: 1, tablecells: ['STD 2WD Auto', '102,178.00', '10,278.00', '91,900', '1715', '1286', '1042', '1196', { type: 'X70 STD 2WD Auto' }]},
		{ id: 2, tablecells: ['Exec 2WD Auto', '112,193.00', '11,293.00', '100,900', '1883', '1411', '1144', '1314', { type: 'X70 Exec 2WD Auto' }]},
		{ id: 3, tablecells: ['Exec 4WD Auto', '118,522.00', '11,922.00', '106,600', '1990', '1491', '1209', '1389', { type: 'X70 Exec 4WD Auto' }]},
		{ id: 4, tablecells: ['Premium 2WD', '126,694.00', '12,694.00', '114,000', '2128', '1595', '1293', '1483', { type: 'X70 Premium 2WD' }]}
	]
}

export const Form = {
	maklumatPemohon: {
		nama: '',
		nomborPendaftaranPerniagaan: '',
		nomborIcBaru: '',
		nomborIcLama: '',
		nomborIdLain: '',
		tarikhLahir: '',
		umur: '',
		bangsa: '',
		alamatRumah: '',
		poskodRumah: '',
		bandarRumah: '',
		negeriRumah: '',
		nomborTelefonRumah: '',
		nomborTelefon1: '',
		nomborTelefon2: '',
		statusPerkahwinan: '',
		bilanganAnak: '',
		alamatSuratMenyurat: '',
		email: '',
		namaPejabat: '',
		alamatPejabat: '',
		poskodPejabat: '',
		bandarPejabat: '',
		negeriPejabat: '',
		nomborTelefonPejabat: '',
		jawatanPejabat: '',
		bilanganTahunPerkhidmatan: '',
		namaPasangan: '',
		nomborTelefonPasangan: '',
		jawatanPasangan: '',
		namaPejabatPasangan: '',
		nomborTelefonPejabatPasangan: ''
	},
	maklumatPenjamin: {
		nama: '',
		nomborIcBaru: '',
		nomborIcLama: '',
		nomborIdLain: '',
		tarikhLahir: '',
		umur: '',
		bangsa: '',
		alamatRumah: '',
		poskodRumah: '',
		bandarRumah: '',
		negeriRumah: '',
		nomborTelefonRumah: '',
		nomborTelefon1: '',
		nomborTelefon2: '',
		statusPerkahwinan: '',
		bilanganAnak: '',
		hubunganDenganPemohon: '',
		namaPejabat: '',
		alamatPejabat: '',
		poskodPejabat: '',
		bandarPejabat: '',
		negeriPejabat: '',
		nomborTelefonPejabat: '',
		jawatanDiPejabat: '',
		bilanganTahunPerkhidmatan: '',
		namaPasangan: '',
		nomborTelefonPasangan: '',
		jawatanPasangan: '',
		namaPejabatPasangan: '',
		nomborTelefonPejabatPasangan: ''
	},
	maklumatPerujuk: {
		nama: '',
		alamatRumah: '',
		poskod: '',
		bandar: '',
		negeri: '',
		nomborTelefon1: '',
		namaPejabat: '',
		nomborTelefonPejabat: '',
		jawatan: '',
		hubunganDenganPemohon: '',
	}
};