(function () {
  $('.monitor .tabs').on('click', 'a', function () {
    $(this).addClass('active').siblings('a').removeClass('active')
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  })
  $(".marquee-view .marquee").each(function () {
    var rows = $(this)
      .children()
      .clone();
    $(this).append(rows);
  });
})();

// 点位分布统计模块
(function () {
  var myChart = echarts.init(document.querySelector(".pie"));
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      confine: true
    },
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ],
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 6,
          length2: 8
        }
      }
    ]
  };
  myChart.setOption(option);
  //浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 柱形图模块
(function () {
  var item = {
    name: "",
    value: 1200,
    itemStyle: {
      color: "#254065"
    },
    emphasis: {
      itemStyle: {
        color: "#254065"
      }
    },
    tooltip: {
      extraCssText: "opacity: 0"
    }
  };
  var myChart = echarts.init(document.querySelector(".bar"));
  var option = {
    color: new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" },
        { offset: 1, color: "#0061ce" }
      ]
    ),
    tooltip: {
      trigger: "item"
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0, 240, 255, 0.3)"
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆"
        ],
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "#4c9bfd",
            fontSize: "7"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        axisLabel: {
          color: "#4c9bfd",
          fontSize: "8"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
          }
        },
        //y轴分割线
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240
        ]
      },

    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//折线图模块
(function () {
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  }
  var myChart = echarts.init(document.querySelector(".line"))
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd",
        fontSize: "7"
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: "rgba(0, 240, 255, 0.3)"
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: "#4c9bfd",
        fontSize: "9"
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd",
        fontSize: "8"
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: '起爆雷管数',
        type: 'line',
        stack: 'Total',
        smooth: 'true',
        data: data.year[0]
      },
      {
        name: '起爆工程数',
        type: 'line',
        stack: 'Total',
        smooth: 'true',
        data: data.year[1]
      }
    ]
  };
  myChart.setOption(option);
  $(".sales .caption").on("click", "a", function () {
    index = $(this).index() - 1;
    $(this)
      .addClass("active")
      .siblings("a")
      .removeClass("active");
    var arr = data[this.dataset.type];
    option.series[0].data = arr[0];
    option.series[1].data = arr[1];
    myChart.setOption(option)
  });
  var as = $(".sales .caption a");
  var index = 0;
  var timer = setInterval(function () {
    index++;
    if (index >= 4) index = 0;
    as.eq(index).click();
  }, 1000);
  // 鼠标经过sales，关闭定时器，离开开启定时器
  $(".sales").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
      }, 1000);
    }
  );
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 地理分布--雷达图
(function () {
  var myChart = echarts.init(document.querySelector(".radar"));
  var option = {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"],
      confine: true,
      textStyle: {
        fontSize: "8"
      }
    },
    radar: {
      nameGap: "9",
      indicator: [
        { name: "华北", max: 100 },
        { name: "东北", max: 100 },
        { name: "华东", max: 100 },
        { name: "中南", max: 100 },
        { name: "西南", max: 100 },
        { name: "西北", max: 100 }
      ],
      radius: "65%",
      shape: "circle",
      // 分割的圆圈个数
      splitNumber: 4,
      name: {
        textStyle: {
          color: "#4c9bfd",
          fontSize: "7"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255, 0.5)"
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)"
        }
      }
    },
    series: [
      {
        name: "统计",
        type: "radar",
        // 填充区域的线条颜色
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
          }
        },
        data: [[40, 79, 56, 81, 34, 60]],
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#fff"
        },
        label: {
          show: true,
          fontSize: 10
        },
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)"
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//饼图
(function () {
  var myChart = echarts.init(document.querySelector(".gauge"));
  var option = {
    series: [
      {
        name: "爆破进度",
        type: "pie",
        radius: ["130%", "150%"],
        center: ["48%", "80%"],
        labelLine: {
          normal: {
            show: false
          }
        },
        startAngle: 180,
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" },
                  { offset: 1, color: "#005fc1" }
                ]
              )
            }
          },
          {
            value: 100,
            itemStyle: {
              color: "#12274d"
            }
          },
          {
            value: 200,
            itemStyle: {
              color: "none"
            }
          }
        ]
      }
    ]
  };
  // 3. 把数据和配置给实例对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

(function () {
  var hotData = [
    {
      city: "北京",
      sales: "25, 179",
      flag: true,
      brands: [
        { name: "爆破公司A", num: "9,086", flag: true },
        { name: "爆破公司B", num: "8,341", flag: true },
        { name: "爆破公司C", num: "7,407", flag: false },
        { name: "爆破公司D", num: "6,080", flag: false },
        { name: "爆破公司E", num: "6,724", flag: false },
        { name: "爆破公司F", num: "2,170", flag: true }
      ]
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "爆破公司A", num: "3,457", flag: false },
        { name: "爆破公司B", num: "2,124", flag: true },
        { name: "爆破公司C", num: "8,907", flag: false },
        { name: "爆破公司D", num: "6,080", flag: true },
        { name: "爆破公司E", num: "1,724", flag: false },
        { name: "爆破公司F", num: "1,170", flag: false }
      ]
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "爆破公司A", num: "2,345", flag: true },
        { name: "爆破公司B", num: "7,109", flag: true },
        { name: "爆破公司C", num: "3,701", flag: false },
        { name: "爆破公司D", num: "6,080", flag: false },
        { name: "爆破公司E", num: "2,724", flag: false },
        { name: "爆破公司F", num: "2,998", flag: true }
      ]
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "爆破公司A", num: "2,156", flag: false },
        { name: "爆破公司B", num: "2,456", flag: true },
        { name: "爆破公司C", num: "9,737", flag: true },
        { name: "爆破公司D", num: "2,080", flag: true },
        { name: "爆破公司E", num: "8,724", flag: true },
        { name: "爆破公司F", num: "1,770", flag: false }
      ]
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "爆破公司A", num: "9,567", flag: true },
        { name: "爆破公司B", num: "2,345", flag: false },
        { name: "爆破公司C", num: "9,037", flag: false },
        { name: "爆破公司D", num: "1,080", flag: true },
        { name: "爆破公司E", num: "4,724", flag: false },
        { name: "爆破公司F", num: "9,999", flag: true }
      ]
    }
  ];
  var supHTML = "";
  $.each(hotData, function (index, item) {
    supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
      ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
  });
  $(".sup").html(supHTML);
  $(".province .sup").on("mouseenter", "li", function () {
    index = $(this).index();
    render($(this));
  });

  function render(currentEle) {
    currentEle
      .addClass("active")
      .siblings()
      .removeClass();
    var subHTML = "";
    $.each(hotData[currentEle.index()].brands, function (index, item) {
      subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
      ${item.flag ? "icon-up" : "icon-down"}
      ></s></span></li>`;
    });
    $(".sub").html(subHTML);
  }
  var lis = $(".province .sup li");
  lis.eq(0).mouseenter();

  var index = 0;
  var timer = setInterval(function () {
    index++;
    if (index >= 5) index = 0;
    render(lis.eq(index));
  }, 2000);

  $(".province .sup").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
      }, 2000);
    }
  );
})();