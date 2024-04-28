const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
        const info = member.querySelector('.member-info');
        info.style.display = 'block';
    });

    member.addEventListener('mouseout', () => {
        const info = member.querySelector('.member-info');
        info.style.display = 'none';
    });
});
