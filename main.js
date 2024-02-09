const update = function() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.drawImage(card.img, 0, 0, c.width, c.height);

    fill_card_regions();
    draw_card_text();
    draw_mana_cost(card.manacost);
    requestAnimationFrame(update);
}
update();