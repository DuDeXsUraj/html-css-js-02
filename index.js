setInterval(() => {
    d = new Date();
    hr = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    hr_rotation = 30*hr + m/2;
    m_rotation = 6*m;
    s_rotation = 6*s;

    hour.style.transform = `rotate (${hr_rotation}deg)`;
    minute.style.transform = `rotate (${m_rotation}deg)`;
    second.style.transform = `rotate (${s_rotation}deg)`;
},1000);