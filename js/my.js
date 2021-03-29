var inp1, inp2;
inp1 = prompt("Month 1-12")
inp2 = prompt("Start Day 1-7")
function Calendar(element, m, day) {
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let monthname = ''
  if (m == 1)
    monthame = 'January'
  else if (m == 2)
    monthame = 'February'
  else if (m == 3)
    monthame = 'March'
  else if (m == 4)
    monthame = 'April'
  else if (m == 5)
    monthame = 'May'
  else if (m == 6)
    monthame = 'June'
  else if (m == 7)
    monthame = 'July'
  else if (m == 8)
    monthame = 'August'
  else if (m == 9)
    monthame = 'September'
  else if (m == 10)
    monthame = 'October'
  else if (m == 11)
    monthame = 'November'
  else if (m == 12)
    monthame = 'December'
  else {
    monthame = "Invalid Input"
}
let creater = `<table><tr><td colspan = "7" align = "center" id="month" font-style = "italic">${monthame}</tr></td><tr><th style="background-color: red;">Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`
let adder = 1
let cDays = 1
let wCounter = 0
if(m > 12 || day > 7){
  element.innerHTML = ("<h1>Invalid Input</h1>")
}
else if(m == 0 || day == 0)
  element.innerHTML = ("<h1>Invalid Input</h1>")
  else{
    if(days[m-1] == 31){
      if(day >= 6){
                for (let i = 0; i < 42; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[m - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[m - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
            
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[m - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[m - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
            
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }
        }else if(days[m-1] == 28){
            if(day >= 2){
            for (let i = 0; i < 35; i++) {
                if (wCounter == 0) {
                    creater += '<tr>'
                }
                if (adder <= day - 1) {
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                        adder++
                    }else{
                        creater += "<td></td>"
                        adder++
                    }
                }
                else if (cDays > days[m - 1]){
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                    }else
                        creater += "<td></td>"
                }    
                else {
                    if (cDays <= days[m - 1]) {
                        if(wCounter == 0){
                            creater += `<td style="background-color: red;">${cDays}</td>`
                            cDays++
                        }else{
                            creater += `<td>${cDays}</td>`
                            cDays++
                        }
                    }
                    else
                        creater += "<td></td>"
                }
                if (wCounter == 6) {
                    creater += '</tr>'
                    wCounter = 0
                }
                else {
                    wCounter++
                }
            }
            }else{
            for (let i = 0; i < 28; i++) {
                if (wCounter == 0) {
                    creater += '<tr>'
                }
                if (adder <= day - 1) {
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                        adder++
                    }else{
                        creater += "<td></td>"
                        adder++
                    }
                }
                else if (cDays > days[m - 1]){
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                    }else
                        creater += "<td></td>"
                }
                else {
                    if (cDays <= days[m - 1]) {
                        if(wCounter == 0){
                            creater += `<td style="background-color: red;">${cDays}</td>`
                            cDays++
                        }else{
                            creater += `<td>${cDays}</td>`
                            cDays++
                        }
                    }
                    else
                        creater += "<td></td>"
                }
                if (wCounter == 6) {
                    creater += '</tr>'
                    wCounter = 0
                }
                else {
                    wCounter++
                }
            }
        }
        }else if(days[m-1] == 30){
            if(day > 6){
                for (let i = 0; i < 42; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
            
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[m - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[m - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }else{
                for (let i = 0; i < 35; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[m - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[m - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }
        }
        creater += '</table>'
    
        element.innerHTML = creater;
        }
    }
Calendar(H1, inp1, inp2)