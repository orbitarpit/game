////////////////////////////////////////////////////////////
// DOTS
////////////////////////////////////////////////////////////

var puzzles_arr = [ {dots:[{x:500, y:103},{x:450, y:203},{x:410, y:303},{x:370, y:413},{x:333, y:533},{x:290, y:640}, ],
				src:'assets/cap/A1.png',
				category:'A',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:500, y:103},{x:570, y:203},{x:610, y:303},{x:650, y:413},{x:690, y:533},{x:720, y:640}, ],
				src:'assets/cap/A2.png',
				category:'A',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:320, y:520},{x:460, y:520},{x:570, y:520},{x:680, y:520}, ],
				src:'assets/cap/A3.png',
				category:'A',
				timer:1500000,},
		
			
		{dots:[  {x:620, y:240},{x:620, y:540}, ],
				src:'assets/small/a1.png',
				category:'a',
				timer:1500000,
				joinLastDot:false},
		{dots:[ {x:620, y:240},{x:460, y:240},{x:310, y:340},{x:330, y:500},{x:470, y:550},{x:620, y:540}, ],
				src:'assets/small/a2.png',
				category:'a',
				timer:1500000,
				joinLastDot:false},
		
		{dots:[  {x:320, y:140},{x:320, y:660}, ],
				src:'assets/cap/B1.png',
				category:'B',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:320, y:140},{x:550, y:140},{x:690, y:200},{x:671, y:326},{x:572, y:384},{x:438, y:393},{x:572, y:384},{x:695, y:501},{x:684, y:624},{x:566, y:677},{x:454, y:687},{x:310, y:665}, ],
				src:'assets/cap/B2.png',
				category:'B',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:352, y:121},{x:352, y:634}],
				src:'assets/small/b1.png',
				category:'b',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:458, y:312},{x:593, y:288},{x:675, y:374},{x:687, y:485},{x:656, y:597},{x:563, y:647},{x:457, y:645},],
				src:'assets/small/b2.png',
				category:'b',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:642, y:261},{x:575, y:203},{x:484, y:185},{x:393, y:244},{x:350, y:331},{x:348, y:429},{x:386, y:519},{x:471, y:572},{x:574, y:567},{x:642, y:509}],
				src:'assets/cap/C.png',
				category:'C',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:632, y:261},{x:499, y:184},{x:350, y:233},{x:306, y:389},{x:339, y:542},{x:482, y:629},{x:621, y:554}],
				src:'assets/small/c1.png',
				category:'c',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:320, y:130},{x:320, y:653}],
				src:'assets/cap/D1.png',
				category:'D',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:305, y:136},{x:567, y:121},{x:682, y:197},{x:730, y:310},{x:755, y:442},{x:698, y:554},{x:598, y:641},{x:336, y:657}],
				src:'assets/cap/D2.png',
				category:'D',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:644, y:122},{x:652, y:637}],
				src:'assets/small/d1.png',
				category:'d',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:544, y:277},{x:420, y:260},{x:322, y:351},{x:323, y:480},{x:382, y:591},{x:561, y:610}],
				src:'assets/small/d2.png',
				category:'d',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:341, y:133},{x:342, y:642},],
				src:'assets/cap/E1.png',
				category:'E',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:346, y:384},{x:605, y:387}],
				src:'assets/cap/E2.png',
				category:'E',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:343, y:674},{x:718, y:674}],
				src:'assets/cap/E3.png',
				category:'E',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:424, y:402},{x:654, y:395},{x:643, y:281},{x:547, y:187},{x:408, y:184},{x:316, y:274},{x:288, y:398},{x:315, y:511},{x:396, y:613},{x:517, y:637},{x:639, y:579},],
				src:'assets/small/e.png',
				category:'e',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:332, y:107},{x:332, y:599},],
				src:'assets/cap/F1.png',
				category:'F',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:332, y:107},{x:682, y:104},],
				src:'assets/cap/F2.png',
				category:'F',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:335, y:355},{x:626, y:356},],
				src:'assets/cap/F3.png',
				category:'F',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:575, y:111},{x:469, y:162},{x:471, y:656},],
				src:'assets/small/f1.png',
				category:'f',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:373, y:284},{x:571, y:284},],
				src:'assets/small/f2.png',
				category:'f',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:697, y:180},{x:601, y:105},{x:469, y:100},{x:352, y:172},{x:307, y:295},{x:307, y:425},{x:366, y:545},{x:473, y:621},{x:607, y:607},{x:730, y:517},],
				src:'assets/cap/G1.png',
				category:'G',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:622, y:389},{x:733, y:388},{x:754, y:618},],
				src:'assets/cap/G2.png',
				category:'G',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:634, y:163},{x:531, y:159},{x:432, y:141},{x:349, y:212},{x:334, y:341},{x:388, y:456},{x:508, y:484},{x:633, y:467},],
				src:'assets/small/g1.png',
				category:'g',
				timer:1500000,
				joinLastDot:false},
		{dots:[  {x:634, y:163},{x:637, y:530},{x:590, y:647},{x:472, y:669},{x:363, y:626},],
				src:'assets/small/g2.png',
				category:'g',
				timer:1500000,
				joinLastDot:false},
				
				];
