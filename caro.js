var o = document.getElementsByClassName("box");
var c = document.getElementById("c");

var khch_boss = 1;
var khch = 2;
var lao = 28;
var hello = 10;
var arr = [];
var ar = [[28, 28, 28, 28],
          [28, 0, 0, 0],
          [28, 0, 0, 0],
          [28, 0, 0, 0]];

function tao_moi()
{
    lao = 28;
    hello = 10;
    arr = [];
    ar = [[28, 28, 28, 28],
            [28, 0, 0, 0],
            [28, 0, 0, 0],
            [28, 0, 0, 0]];
    for (var i = 0 ; i < 10 ; i++)
    {
        arr.push(0);
    }
    for (var q = 1; q < 10; q++)
    {
        if (arr[q] == 0)
        {
            danh("", q);
        }
    }
}

function tao()
{
    var kqwe = 0;
    var rd_tao;
    rd_tao = Math.random().toString();
    rd_tao = rd_tao[rd_tao.length - 1];
    rd_tao = Number(rd_tao);
    return rd_tao;
}
var rd;
rd = tao();

for (var i = 0 ; i < 10 ; i++)
{
    arr.push(0);
}
function danh(text_box, vtr_box)
{
    document.getElementById(vtr_box).innerText = text_box;
}
function boss_boss(vt)
{
    var x, y, vtr_boss, text_boss, r, ngnh;
    vtr_boss = 0;
    var sl = 0;
    // console.log(ar);
    for (var e = 1; e < 10; e++)
    {
        if (arr[e] != 0)
        {
            sl++;
        }
    }


    // console.log(sl);
//xac dinh x hay o
    if (khch == 2)
        {
            text_boss = "X";
        }
    else
        {
            text_boss = "O";
        }

// tim vi tri 
    if (vt > 6)
    {
        y = 3;
        x = vt - 6;
    }
    else
    {
        if (vt > 3)
        {
            y = 2;
            x = vt - 3;
        }
        else
        {
            y = 1;
            x = vt - 0;
        }
    }

// danh giau o vua danh
    ar[y][x] = khch;

    for (var e = 1; e < 4 ; e++)
    {
        var sl_boss = 0;
        for (var r = 1; r < 4; r++)
        {
            if (ar[r][e] == khch_boss)
            {
                sl_boss++;
            }
        }
        if (sl_boss == 2 && vtr_boss == 0)
        {
            for (var r = 1; r < 4; r++)
            {
                if (ar[r][e] == 0)
                {
                    vtr_boss = (r-1) * 3 + e;
                    ar[r][e] = khch_boss;
                }
            }
        }
    }
    for (var e = 1; e < 4 ; e++)
    {
        var sl_boss = 0;
        for (var r = 1; r < 4; r++)
        {
            if (ar[e][r] == khch_boss)
            {
                sl_boss++;
            }
        }
        if (sl_boss == 2 && vtr_boss == 0)
        {
            for (var r = 1; r < 4; r++)
            {
                if (ar[e][r] == 0)
                {
                    vtr_boss = (e-1) * 3 + r;
                    ar[e][r] = khch_boss;
                }
            }
        }
    }

    if (arr[1] == khch_boss && arr[5] == khch_boss && ar[3][3] == 0)
    {
        ar[3][3] = khch_boss;
        vtr_boss = 9;
    }
    if (arr[1] == khch_boss && arr[9] == khch_boss && ar[2][2] == 0)
    {
        ar[2][2] = khch_boss;
        vtr_boss = 5;
    }
    if (arr[9] == khch_boss && arr[5] == khch_boss && ar[1][1] == 0)
    {
        ar[1][1] = khch_boss;
        vtr_boss = 1;
    }


    if (arr[7] == khch_boss && arr[5] == khch_boss && ar[1][3] == 0)
    {
        ar[1][3] = khch_boss;
        vtr_boss = 3;
    }
    if (arr[7] == khch_boss && arr[3] == khch_boss && ar[2][2] == 0)
    {
        ar[2][2] = khch_boss;
        vtr_boss = 5;
    }
    if (arr[3] == khch_boss && arr[5] == khch_boss && ar[3][1] == 0)
    {
        ar[3][1] = khch_boss;
        vtr_boss = 7;
    }

// neu danh o o giua
    if (x == y && x == 2 && lao == 28)
    {
        while (rd % 2 == 0 || rd < 1 || arr[rd] != 0)
        {
            rd = tao();
        }
        vtr_boss = rd;
        if (vtr_boss == 1)
        {
            ar[1][1] = khch_boss;
        }
        if (vtr_boss == 3)
        {
            ar[1][3] = khch_boss;
        }
        if (vtr_boss == 7)
        {
            ar[3][1] = khch_boss;
        }
        if (vtr_boss == 9)
        {
            ar[3][3] = khch_boss;
        }
    }

    if (arr[5] == 0)
    {
        arr[5] = khch_boss;
        vtr_boss = 5;
        ar[2][2] = khch_boss;
    }
    if (ar[1][1] != 0 && ar[2][2] != 0 && ar[3][3] != 0 && sl == 3)
    {
        ngnh = tao();
        if (ngnh % 2 == 1)
        {
            vtr_boss = 3;
            ar[1][3] = khch_boss;
        }
        else
        {
            vtr_boss = 7;
            ar[3][1] = khch_boss;
        }
    }
    if (ar[3][1] != 0 && ar[2][2] != 0 && ar[1][3] != 0 && sl == 3)
    {
            ngnh = tao();
            if (ngnh % 2 == 1)
            {
                vtr_boss = 1;
                ar[1][1] = khch_boss;
            }
            else
            {
                vtr_boss = 9;
                ar[3][3] = khch_boss;
            }
    }
    if (vtr_boss == 0)
    {
        for (r = 1 ; r < 4; r++)
        {
            if (ar[1][r] == khch && ar[2][r] == khch && ar[3][r] == 0 && vtr_boss == 0)
            {
                vtr_boss = 6 + r;
                ar[3][r] = khch_boss;
            }
            if (ar[2][r] == khch && ar[3][r] == khch && ar[1][r] == 0 && vtr_boss == 0)
            {
                vtr_boss = r;
                ar[1][r] = khch_boss;
            }
            if (ar[3][r] == khch && ar[1][r] == khch && ar[2][r] == 0 && vtr_boss == 0)
            {
                vtr_boss = 3 + r;
                ar[2][r] = khch_boss;
            }


            if (ar[r][1] == khch && ar[r][2] == khch && ar[r][3] == 0 && vtr_boss == 0)
            {
                vtr_boss = 3 * r;
                ar[r][3] = khch_boss;
            }
            if (ar[r][2] == khch && ar[r][3] == khch && ar[r][1] == 0 && vtr_boss == 0)
            {
                vtr_boss = 1 + (r - 1) * 3;
                ar[r][1] = khch_boss;
            }
            if (ar[r][3] == khch && ar[r][1] == khch && ar[r][2] == 0 && vtr_boss == 0)
            {
                vtr_boss = 2 + (r - 1) * 3;
                ar[r][2] = khch_boss;
            }
        }
        if (ar[1][1] == khch && ar[2][2] == khch && ar[3][3] == 0 && vtr_boss == 0)
        {
            vtr_boss = 9;
            ar[3][3] = khch_boss;
        }
        if (ar[2][2] == khch && ar[3][3] == khch && ar[1][1] == 0 && vtr_boss == 0)
        {
            vtr_boss = 1;
            ar[1][1] = khch_boss;
        }
        if (ar[3][3] == khch && ar[1][1] == khch && ar[2][2] == 0 && vtr_boss == 0)
        {
            vtr_boss = 5;
            ar[2][2] = khch_boss;
        }


        if (ar[3][1] == khch && ar[2][2] == khch && ar[1][3] == 0 && vtr_boss == 0)
        {
            vtr_boss = 3;
            ar[1][3] = khch_boss;
        }
        if (ar[2][2] == khch && ar[1][3] == khch && ar[3][1] == 0 && vtr_boss == 0)
        {
            vtr_boss = 7;
            ar[3][1] = khch_boss;
        }
        if (ar[3][1] == khch && ar[1][3] == khch && ar[2][2] == 0 && vtr_boss == 0)
        {
            vtr_boss = 5;
            ar[2][2] = khch_boss;
        }

    }

    // console.log("4 goc dau cong");
    // console.log(vtr_boss);
    if (vtr_boss == 0)
    {
        if (vt == 1 || vt == 3)
        {
            ngnh = tao();
            if (ngnh % 2 == 1 && arr[2] == 0)
            {
                vtr_boss = 2;
                ar[1][2] = khch_boss;
            }
            else
            {
                if (arr[4] == 0 || arr[6] == 0)
                {
                    if (vt == 1)
                    {
                        vtr_boss = 4;
                        ar[2][1] = khch_boss;
                    }
                    else
                    {
                        vtr_boss = 6;
                        ar[2][3] == khch_boss;
                    }
                }
                else
                {
                    if (arr[2] == 0)
                    {
                        vtr_boss = 2;
                        ar[1][2] = khch_boss;
                    }
                }
            }
        }
        if (vt == 7 || vt == 9)
        {
            ngnh = tao();
            if (ngnh % 2 == 1 && arr[8] == 0)
            {
                vtr_boss = 8;
                ar[3][2] = khch_boss;
            }
            else
            {
                if (arr[4] == 0 || arr[6] == 0)
                {
                    if (vt == 7)
                    {
                        vtr_boss = 4;
                        ar[2][1] = khch_boss;
                    }
                    else
                    {
                        vtr_boss = 6;
                        ar[2][3] = khch_boss;
                    }
                }
                else
                {
                    if (arr[8] == 0)
                    {
                        vtr_boss = 8;
                        ar[3][2] = khch_boss;
                    }
                }
            }
        }
    }
    if (vtr_boss == 0)
    {
        ngnh = tao();
        if (vt == 2 || vt == 8)
        {
            if (ngnh % 2 == 0 && arr[vt-1] == 0)
            {
                if (vt == 2)
                {
                    vtr_boss = 1;
                    ar[1][1] = khch_boss;
                }
                else
                {
                    vtr_boss = 7;
                    ar[3][1] = khch_boss;
                }
            }
            else
            {
                if (arr[vt+1] == 0)
                {
                    if (vt == 2)
                    {
                        vtr_boss = 3;
                        ar[1][3] = khch_boss;
                    }
                    else
                    {
                        vtr_boss = 9;
                        ar[3][3] = khch_boss;
                    }
                }
                else
                {
                    if (vt == 2)
                    {
                        if (arr[1] == 0)
                        {
                            vtr_boss = 1;
                            ar[1][1] = khch_boss;
                        }
                    }
                    else
                    {
                        if (arr[7] == 0)
                        {
                            vtr_boss = 7;
                            ar[3][1] = khch_boss;
                        }
                    }
                }
            }
        }
        if (vt == 4 || vt == 6)
        {
            if (ngnh % 2 == 0 && arr[vt-3] == 0)
            {
                if (vt == 4)
                {
                    vtr_boss = 1;
                    ar[1][1] = khch_boss;
                }
                else
                {
                    vtr_boss = 3;
                    ar[1][3] = khch_boss;
                }
            }
            else
            {
                if (arr[vt+3] == 0)
                {
                    if (vt == 4)
                    {
                        vtr_boss = 7;
                        ar[3][1] = khch_boss;
                    }
                    else
                    {
                        vtr_boss = 9;
                        ar[3][3] = khch_boss;
                    }
                }
                else
                {
                    if (vt == 4)
                    {
                        if (arr[1] == 0)
                        {
                            vtr_boss = 1;
                            ar[1][1] = khch_boss;
                        }
                    }
                    else
                    {
                        if (arr[3] == 0)
                        {
                            vtr_boss = 3;
                            ar[1][3] = khch_boss;
                        }
                    }
                }
            }
        }
    }

    arr[vtr_boss] = khch_boss;
    vtr_boss = vtr_boss.toString();
    if(vtr_boss != "0")
    {
        danh(text_boss, vtr_boss);
    }
}

function xuat()
{
    var o_so = this.id;
    var text_o;
    vitri = o_so.toString();
    if (arr[o_so] == 0)
    {
        if (khch == 2)
        {
            text_o = "O";
        }
        else
        {
            text_o = "X";
        }
        danh(text_o, vitri);
        arr[o_so] = khch;
        for (var t = 1; t<10; t++)
        {
            if (arr[t] == 0)
            {
                hello = 28;
                break;
            }
        }
        if (hello == 28)
        {
            boss_boss(o_so);  
        }
        lao++;
        
    }
    for (var e = 0; e < 7; e+=3)
    {
        if (arr[1+e] == khch_boss && arr[2+e] == khch_boss && arr[3+e] == khch_boss)
        {
            tao_moi();
        }
    }
    for (var e = 0; e < 3; e++)
    {
        if (arr[1+e] == khch_boss && arr[4+e] == khch_boss && arr[7+e] == khch_boss)
        {
            tao_moi();
        }
    }
    if (arr[1] == khch_boss && arr[5] == khch_boss && arr[9] == khch_boss)
    {
        {
            tao_moi();
        }
    }
    if (arr[3] == khch_boss && arr[5] == khch_boss && arr[7] == khch_boss)
    {
        {
            tao_moi();
        }
    }
}



for (var i = 0; i<o.length; i++)
{
    o[i].addEventListener('click', xuat);
}
c.addEventListener('click' , tao_moi);